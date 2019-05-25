import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

// import Post from '../../components/Post/Post';
// import FullPost from '../../components/FullPost/FullPost';
// import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});

class Blog extends Component {
    // state = {
    //     posts: [],
    //     selectedPostId: null,
    //     error: false
    // }

    // componentDidMount () {
    //     axios.get('/posts')
    //         .then(response => {
    //             const posts = response.data.slice(0, 4);
    //             const updatedPosts = posts.map(post => {
    //                 return {
    //                     ...post,
    //                     author: 'Max'
    //                 }
    //             })
    //             this.setState({posts: updatedPosts});
    //             // console.log(response);
    //         } )
    //         .catch(error => {
    //             // console.log(error);
    //             this.setState({error: true});
    //         });
    // }

    // postSelectedHandler = (id) => {
    //     this.setState({selectedPostId: id});
    // }
    state = {
        auth: true
    }

    render () {
        // let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        // if(!this.state.error) {
        //     posts = this.state.posts.map(post => {
        //         return <Post 
        //             key={post.id} 
        //             title={post.title} 
        //             author={post.author}
        //             clicked={() => this.postSelectedHandler(post.id)} />;
        //     });
        // }        

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink 
                                to="/posts/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <section className="Posts">
                    {posts}
                </section> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section> */}
                {/* <Posts /> */}

                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home 2</h1>} /> */}                
                <Switch>        
                    {/* {this.state.auth ? <Route path="/new-post" component={NewPost} />: null} */}
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} />: null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* <Route path="/" component={Posts} />  */}
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;