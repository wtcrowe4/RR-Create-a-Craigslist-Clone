import React from 'react';
 

const Posting = (props) => {
    //Bring in given postings from postings.js
    const craigPostings = require('../postings.js');
    let postList = craigPostings.postings.map((posting, index) => {
        return (
            <div className="posting">
                <Posting data={posting} key={index}/>
            </div>
        );
    })

    return (
        <div className="postings">
            <h4>Postings</h4>
            {postList}
        </div>
    );
};

export default Posting;