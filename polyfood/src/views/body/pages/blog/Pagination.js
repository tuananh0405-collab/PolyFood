import React from "react";

const Pagination = ({totalPosts, postsPerPage, setCurrentPage}) => {
    let pages = [];

    for (let i = 1; i<=Math.ceil(totalPosts/postsPerPage); i++) {
        pages.push(i)
    }

    return (
        <div>
            {
                pages.map((page, index) => {
                    return <button 
                    className="h-8 w-8 text-center text-white bg-red-500 hover:bg-red-600 rounded-full mr-2"
                    key={index} onClick={() => setCurrentPage(page)}>{page}</button>
                })
            }
        </div>
    )
}

export default Pagination;