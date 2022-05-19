import { Box, Grid, Container } from 'theme-ui';
import React from 'react';
import BlockTitle from 'components/block-title';
import FavoriteCard from 'components/favorite-card';
import fevCardImageOne from 'assets/fev-course-1-1.png';
import fevCardImageTwo from 'assets/fev-course-1-2.png';
import fevCardImageThree from 'assets/fev-course-1-3.png';

import { Swiper, SwiperSlide } from 'swiper/react';

const favoriteCourseData = [
  {
    title: 'Learn Python directly from in this crucial introductory online course',
    image: fevCardImageOne,
    reviewCount: '5.0 (20 reviews)',
    watchCount: '25 students watched',
    videoLink: '_uQrJ0TkZlc',
    starCount: 5,
  },
  {
    title:
      'Learn DataBase Concepts & SQL Crash Course',
    image: fevCardImageTwo,
    reviewCount: '4.5 (24 reviews)',
    watchCount: '32 students watched',
    videoLink: 'wR0jg0eQsZA',
    starCount: 4,
  },
  {
    title:
      'Learn About the Power of JavaScript and ES6',
    image: fevCardImageThree,
    reviewCount: '5.0 (3 reviews)',
    watchCount: '10 students watched',
    videoLink: 'W6NZfCO5SIk',
    starCount: 5,
  },
  {
    title:
      'Learn ReactJS Fundamentals Built React Components App Navigation & Adding Theme ',
    image: fevCardImageThree,
    reviewCount: '5.0 (32 reviews)',
    watchCount: '37 students watched',
    videoLink: '0-S5a0eXPoc',
    starCount: 5,
  }
];

const FavoriteCourse = () => {
  const FavoriteCarousel = {
    spaceBetween: 30,
    slidesPerView: 3,
    breakpoints: {
      0: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      376: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      576: {
        spaceBetween: 0,
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      992: {
        spaceBetween: 30,
        slidesPerView: 2,
      },
      1200: {
        spaceBetween: 30,
        slidesPerView: 3,
      },
    },
  };
  return (
    <Box as="section" sx={styles.fevCourse}>
      <Container sx={styles.fevCourse.container}>
        <BlockTitle
          sx={styles.fevCourse.blockTitle}
          tagline="Quality features"
          heading="Tutorials that students love most"
        />
        <Swiper {...FavoriteCarousel} sx={styles.carousel}>
          {favoriteCourseData.map((course, index) => (
            <SwiperSlide key={index}>
              <FavoriteCard
                starCount={course.starCount}
                title={course.title}
                image={course.image}
                reviewCount={course.reviewCount}
                watchCount={course.watchCount}
                videoLink={course.videoLink}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};

export default FavoriteCourse;

const styles = {
  fevCourse: {
    paddingTop: ['60px', null, null, '80px', '110px'],
    pb: [null, null, null, '30px', '50px', '0'],
    container: {
      maxWidth: 1440,
      '@media(max-width:1440px)': {
        maxWidth: 1240,
      },
      '.swiper-container': {
        pb: '30px',
        overflow: [null, null, null, null, null, 'visible'],
      },
    },
    blockTitle: {
      textAlign: 'center',
      marginBottom: '30px',
    },
    row: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: 30,
      '@media(max-width: 991px)': {
        gridTemplateColumns: '1fr 1fr',
      },
      '@media(max-width: 575px)': {
        gridTemplateColumns: '1fr',
      },
    },
    col: {
      display: 'flex',
    },
  },
};
