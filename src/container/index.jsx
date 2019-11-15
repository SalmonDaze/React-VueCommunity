import React, { Component } from 'react'
import { Footer } from '../components/Footer'
import { apiGet } from '../utils/apiRequest'
import dayjs from 'dayjs'
import { Link } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';

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
            <li className='strand'>
                <Link to={`/topic/${id}`} style={{display: 'flex'}}>
                    <div className='strand_avatar'> 
                        <img src={author.avatar_url}/>
                    </div>
                    <div className='strand_right'>
                        <div className='strand_title'>{top ? <span className='strand_top'>置顶</span> : good ? 
                            <span className='strand_good'>精华</span> :
                            <span className='strand_tab'>{tabMap[tab]}</span>}<span>{title}</span></div>
                        <div className='strand_s'>
                            <div className='strand_info'>
                                <div className='strand_visit'>浏览: {visit_count}</div>
                                <div className='strand_reply'>回复: {reply_count}</div>
                                <div className='strand_create'>发布于: {create_at}</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </li>
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
            loadData: false,
            scrollHandle: () => {
                if( this.state.loadData ) return
                let height = document.documentElement.scrollTop + window.innerHeight
                if(  this.refs.post.scrollHeight - height < 10 ){
                    this.setState((prevState) => ({
                        page: prevState.page + 1,
                        loadData: true,
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
                    loadData: false
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
            <div className='container'>
            { !this.state.isLoading ? <div ref='post'><ul className='post_container'>
                    { res.map( strand => 
                    <Post key={strand.id} author={strand.author} 
                    title={strand.title} create_at={this.formatTime(dayjs(strand.create_at))}
                    reply_count={strand.reply_count} visit_count={strand.visit_count}
                    tab={strand.tab} good={strand.good} top={strand.top} id={strand.id} />
                    ) }
                </ul>
                </div> :
                <div className='align'>
                    <CircularProgress color="secondary"/>
                </div>
            }
            </div>
        )
    }
}

export default Main