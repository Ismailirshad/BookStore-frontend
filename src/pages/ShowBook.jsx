import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import BackButton from '../components/BackButton'
import axios from 'axios'
import Spinner from '../components/Spinner'

function ShowBook() {
    const [book, setBook] = useState({})
    const [loading, setIsLoading] = useState(false)
    const { id } = useParams()

    useEffect(() => {
        setIsLoading(true)
        axios.get(`https://book-store-backend-khaki.vercel.app/books/${id}`)
            .then((response) => {
                setBook(response.data)
                setIsLoading(false)
            }).catch((error) => {
                console.log(error.message)
                setIsLoading(false)
            })
    }, [])
    return (
        <div className="p-4">
            <BackButton />
            <h1 className='text-3xl my-4'>Show Book</h1>
            {loading ? <Spinner /> : (
                <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">

                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Id</span>
                        <span>{book.id}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Title</span>
                        <span>{book.title}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Author</span>
                        <span>{book.author}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Publish Year</span>
                        <span>{book.publishYear}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Create Time</span>
                        <span>{new Date(book.createdAt).toString()}</span>
                    </div>
                    <div className="my-4">
                        <span className="text-xl mr-4 text-gray-500">Last Updated Time</span>
                        <span>{new Date(book.updatedAt).toString()}</span>
                    </div>
                    
                </div>
            )}
        </div>
    )
}

export default ShowBook
