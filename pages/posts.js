import Navigation from '../components/Navigation';
import axios from 'axios';
import React, { Component, Fragment } from 'react';

export default class extends Component {

  // Resolve promise and set intial props
  static async getInitialProps () {

    // Make requests for posts
    const response = await axios.get( 'http://mortaltheman.aodev4.com/wp-json/wp/v2/posts' )

    // Return response to posts object in props
    return {
      posts: response.data
    }
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <h1>Our Posts Page!</h1>
        <ul>
          {
            this.props.posts.map( post => {
              return (
                <li key={ post.id }>{ post.title.rendered }</li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}
