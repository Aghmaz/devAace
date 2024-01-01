import React from "react";
import { Carousel } from "react-bootstrap";

const ClientReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      comment:
        "DevAace IT Services is outstanding. They provided top-notch solutions and exceeded our expectations.",
      image: "client1.jpg",
    },
    // {
    //   id: 2,
    //   name: "Almir",
    //   rating: 4,
    //   comment:
    //     "Very impressed with the quality of work by DevAace. Their team is highly professional and skilled.",
    //   image: "client2.jpg",
    // },
    // Add more reviews as needed
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-3">Client Reviews</h2>
      <Carousel>
        {reviews.map((review) => (
          <Carousel.Item key={review.id}>
            <div className="card p-3 bg-light text-center">
              <div className="text-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="img-fluid rounded-circle"
                />
                <h4 className="mt-3">{review.name}</h4>
                <div className="star-ratings-css text-center">
                  <div
                    className="star-ratings-css-top text-center"
                    style={{ width: `${(review.rating / 5) * 100}%` }}
                  >
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <p>{review.comment}</p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ClientReviews;
