import React from "react";
import { Link } from "react-router-dom";
import styles from "./Blog.module.css";

export default function OurBlog() {
    // Static data for demonstration
    const blogs = [
        {
            _id: "1",
            title: "Как се подготвя митническа документация?",
            imageUrl: "https://otgovori.info/wp-content/uploads/docs.jpg",
            info: "this is info"
        },
        {
            _id: "2",
            title: "Ръководство за износ на стоки",
            imageUrl: "https://webnews.bg/uploads/images/57/1757/621757/768x432.jpg?_=1686299072",
            info: "this is info"
        },
        {
            _id: "3",
            title: "Документи за превоз по суша",
            imageUrl: "https://bers.bg/wp-content/uploads/2022/08/employee-of-a-logistics-warehouse.jpg",
            info: "this is info"
        },
    ];

    return (

        <div className={`container-fluid blog py-5 ${styles.blog}`}>
            <div
                className="mx-auto text-center mb-5"
                style={{
                    maxWidth: '700px',
                    display: 'flex',           // Use Flexbox
                    justifyContent: 'center',  // Center horizontally
                    alignItems: 'center',      // Center vertically if needed
                    flexDirection: 'column',     // Stack items vertically
                    marginTop: '70px',
                    marginBottom: '20px'
                }}
            >
                <div className="text" data-aos="fade-bottom">
                    <h2>БЛОГ</h2>
                </div>
            </div>


            <div className="container py-5">
                <div className="row g-4 justify-content-center">
                    {blogs.map((blog) => (
                        <div className="col-lg-4 col-md-6" key={blog._id}>
                            <div className={styles["blog-item"]}>
                                <div className={styles["blog-img"]}>
                                    <div className={styles["blog-img-inner"]}>
                                        <img
                                            className="img-fluid w-100 rounded-top"
                                            src={blog.imageUrl}
                                        />
                                        <div className={styles["blog-icon"]}>
                                            <Link className="my-auto" to={`/blogs/${blog._id}`}>
                                                <i className="fas fa-link fa-2x text-white" />
                                            </Link>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className="blog-content rounded-bottom p-4">

                                    <h4>{blog.title}</h4>
                                    <Link className="btn btn-primary rounded-pill py-2 px-4" to={`/blogs/${blog._id}`}>
                                        View post
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="d-flex justify-content-center mt-4">
                <Link to="/blogs" className="btn btn-primary mx-2">View All Blogs</Link>
            </div>
        </div>
    );
}
