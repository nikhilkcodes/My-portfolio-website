import React, {useState, useEffect} from "react"
import ContentWrapper from "../contentWrapper/ContentWrapper";
import axios from 'axios';
import './style.css'

const Tweets = () => {
	const [tweets, setTweets] = useState([])
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchTweets = async () => {
			try {
				const response = await axios.get('/twitter-api/2/tweets?user.fields=created_at&max_results=3&screen_name=mainikhilhun', {
					headers: {
						Authorization: `Bearer AAAAAAAAAAAAAAAAAAAAAJjFswEAAAAAs4Fu5gYhBaMKqmcaSC4F4eXvsZc%3DDBUKf8pD0jm6xcLtOsYGlbdeKOC2o4q7zCd8p5IiRUENWKz4d4`,
					  },
				})
				console.log('Response from Twitter API:', response.data);
				setTweets(response.data);
                setLoading(false);
			} catch (error) {
				console.error('error fetching tweets:', error);
				setError(error.message);
                setLoading(false);
			}
		};
      fetchTweets();
	}, [])
	if (loading) {
		return <div>Loading...</div>;
	  }

	  if (error) {
		return <div>Error: {error}</div>;
	  }

	return (
		<div className="comp-body">
			<ContentWrapper >
                 <h3 className="text-dark text-center">Latest Tweets</h3>
				 {tweets.map(tweet => (
        <div key={tweet.id}>
          <p>{tweet.text}</p>
          <p>By: {tweet.author}</p>
          <p>Posted at: {tweet.created_at}</p>
        </div>
      ))}
		    </ ContentWrapper>
		</div>
	)
}

export default Tweets;
