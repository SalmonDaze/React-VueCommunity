import React, { Component } from 'react'
import { Footer } from '../components/Footer'
import { apiGet } from '../utils/apiRequest'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'

class Post extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let { author, content, create_at,
            last_reply_at, reply_count, tab, title,
            top, visit_count, id, good } = this.props

        let tabMap = {
            share: '分享',
            ask: '问答',
            job: '招聘'
        }

        return (
            <div className='strand'>
                <Link to={`/topic/${id}`}>
                    <img className='strand_avatar' src={author.avatar_url}/>
                    <div className='strand_title'>{top ? <span className='strand_top'>置顶</span> : good ? 
                        <span className='strand_good'>精华</span> :
                        <span className='strand_tab'>{tabMap[tab]}</span>}<span>{title}</span></div>
                    <div className='strand_s'>
                        <div className='strand_info'>
                            <div className='strand_visit' style={{float: 'left'}}>浏览: {visit_count}</div>
                            <div className='strand_reply' style={{float: 'left'}}>回复: {reply_count}</div>
                            <div className='strand_create' style={{float: 'left'}}>发布于: {create_at}</div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            page: 1,
            tab: 'all',
            limit: 15,
            resdata: [],
            isLoading: true,
            scrollHandle: () => {
                let height = document.body.scrollTop || document.documentElement.scrollTop
                if( ( height / this.refs.post.scrollHeight ) > 0.48 ){
                    this.setState((prevState) => ({
                        page: prevState.page + 1
                    }))
                    this.getData()
                }
            },
        }

        this.getData = async () => {
            let { page, tab, limit } = this.state
            let res = await apiGet('https://www.vue-js.com/api/v1/topics', { page, tab, limit})
            if( res.status === 200 ){
                this.setState((prevState) => ({
                    resdata: [...prevState.resdata, ...res.data.data],
                    isLoading: false,
                }))
            }
        }

        this.formatTime = (time) => {
            let dateObj = dayjs(time)
            
            return `${dateObj.$y}-${dateObj.$M + 1}-${dateObj.$D}`
        }

    }

    componentWillMount(){
        this.getData()
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this.state.scrollHandle)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.state.scrollHandle)
    }

    render(){
        let res = this.state.resdata
        return (
            <div className='container' onScroll={this.handleScroll}>
            { !this.state.isLoading ? <div><div className='post_container' ref='post'>
                    { res.map( strand => 
                    <Post key={strand.id} author={strand.author} 
                    title={strand.title} create_at={this.formatTime(dayjs(strand.create_at))}
                    reply_count={strand.reply_count} visit_count={strand.visit_count}
                    tab={strand.tab} good={strand.good} top={strand.top} id={strand.id} />
                    ) }
                </div>
                <Footer currentCategory='首页'></Footer></div> :
                <div><span>Loading...</span></div>
            
            }
                
            </div>
        )
    }
}

export default Main