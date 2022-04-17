import React, { useContext, useState } from 'react'
import PropTypes from "prop-types"
import UserContext from '../../context/user'
import FirebaseContext from '../../context/firebase'
import { updateDoc, arrayRemove, arrayUnion, doc } from 'firebase/firestore'
const FormAddComment = ({ docId, comments, setComments, commentInput }) => {
    const [comment, setComment] = useState("")
    const { db } = useContext(FirebaseContext)
    const { user: { displayName } } = useContext(UserContext)
    const handleSubmitComment = async (e) => {
        e.preventDefault()
        setComments([{ displayName, comment }, ...comments])
        setComment("")
        const photosRef = doc(db, "photos", docId);
        await updateDoc(photosRef, {
            comments: arrayUnion({ displayName, comment })
        });
    }


    return (
        <div className="border-t border-gray-primary">
            <form className='flex justify-between pl-0 pr-5' onSubmit={handleSubmitComment}>
                <input type="text"
                    aria-label="Add a comment"
                    autoComplete='off'
                    className='text-sm text-gray w-full mr-3 py-4 px-4'
                    name="add-comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    ref={commentInput}
                    placeholder="Add a comment "
                />
                <button className={`text-sm font-bold text-blue-medium ${!comment && 'opacity-25'}`}
                    disabled={comment.length < 1}
                    onClick={handleSubmitComment}

                >
                    Post
                </button>
            </form>
        </div>
    )
}

export default FormAddComment

FormAddComment.propTypes = {
    docId: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    setComments: PropTypes.func.isRequired,
    commentInput: PropTypes.object.isRequired
}