import React from 'react'
import '../../style/tag.css';

function Tags ({tags}) {
		return (
			<div id = "tags">
                {tags.map((tag)=> {
                    return (
                        <span className="tag" key={`${tag}`}>
                            {tag}
                        </span>
                    );
                })}
           	</div>
		);
	};
	
export default Tags;

