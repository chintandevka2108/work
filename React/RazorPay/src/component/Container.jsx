import React from 'react';
import Slider from 'react-slick';
import { Container as BootstrapContainer, Row, Col, Card, Badge } from 'react-bootstrap';

const Container = () => {
    const Data = [
        // Your data here (make sure to replace placeholder images with high-quality ones)
        {
            page: "1",
            totalPage: "5",
            Heading: "Top Payment Products",
            Header: ["All", "Payment Links", "Payment Pages", "Payment Buttons", "Subscriptions"],
            card: [
                {
                    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?...",
                    name: "Payment Gateway",
                    description: "Offer a seamless payment experience on your website or app with our robust payment gateway solution."
                },
                {
                    img: "https://img.icons8.com/color/480/paypal.png",
                    name: "Payment Button",
                    description: "Effortlessly add a Pay Now button without any coding required. Simple integration for quick payments."
                }
                ,
                {
                    img: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?...",
                    name: "Payment Link",
                    description: "Create and share links via email, text, and social media for instant payments from customers."
                },
                // Add more cards as needed
            ]
        },
        // Add more sections as needed
    ];

    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <BootstrapContainer fluid className="bg-light py-5">
            {Data.map((section, index) => (
                <BootstrapContainer key={index} className="mb-5">
                    {/* Section Header */}
                    <Row>
                        <Col>
                            <div className="px-4 py-3 bg-primary text-white rounded-top">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="small">{section.page}/<span className="text-light">{section.totalPage}</span></span>
                                    <h2 className="h4 mb-0 fw-semibold">{section.Heading}</h2>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    {/* Optional Header Pills */}
                    {section.Header && (
                        <Row>
                            <Col>
                                <div className="d-flex flex-wrap gap-2 px-4 py-3 bg-white shadow-sm">
                                    {section.Header.map((item, i) => (
                                        <Badge
                                            key={i}
                                            bg={i === 0 ? "warning" : "light"}
                                            text={i === 0 ? "dark" : "dark"}
                                            className="px-3 py-2 rounded-pill"
                                        >
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </Col>
                        </Row>
                    )}

                    {/* Cards Slider */}
                    <Row className="mt-4">
                        <Col>
                            <Slider {...sliderSettings}>
                                {section.card.map((cardData, i) => (
                                    <div key={i} className="px-2">
                                        <Card className="h-100 border-0 shadow-sm overflow-hidden transition-all">
                                            <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
                                                <Card.Img
                                                    variant="top"
                                                    src={cardData.img}
                                                    alt={cardData.Name}
                                                    className="h-100 object-fit-cover img-sharp transition-all"
                                                    style={{ transition: 'transform 0.3s ease' }}
                                                    loading="lazy"
                                                />
                                            </div>
                                            <Card.Body className="d-flex flex-column bg-light" style={{ height: '140px' }}>
                                                <Card.Title className="h6 text-truncate">{cardData.Name}</Card.Title>
                                                <Card.Text className="small text-muted line-clamp-2 flex-grow-1">
                                                    {cardData.description}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                ))}
                            </Slider>
                        </Col>
                    </Row>
                </BootstrapContainer>
            ))}
        </BootstrapContainer>
    );
};

export default Container;