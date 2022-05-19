import React from 'react';
import { Box, Container } from 'theme-ui';
import Accordion from 'components/accordion/accordion';
import BlockTitle from 'components/block-title';

const accordionData = [
  {
    isExpanded: false,
    title: 'What are the benefits of online classes ?',
    contents: (
      <div>
        Online classes permit students to learn anything or whatever they want.
         When students have their own choice, they can learn more efficiently. 
         Through online classes, students can learn the subject in which they are interested. 
         In online classes, students have numerous choices so that they can choose anything of their choice. 
         Lower In Cost
      </div>
    ),
  },
  {
    isExpanded: true,
    title: 'Are  online Computer Science degrees good?',
    contents: (
      <div>
       If you are wondering whether a computer science degree is worth the investment, 
       the answer is a resounding yes. Computer science professionals are in high demand, and 
       Internet growth is only going to increase that demand.  The computer science online degree
        allows you to learn with the flexibility of online study
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Can You get a computer Science job without a degree?',
    contents: (
      <div>
        Yes, it is possible to get a job in computer science without a degree. 
        Employers today are more focused on hiring experienced and talented 
        candidates regardless of their formal qualifications.
         With adequate training and some working experience, you should be able to secure a job in the field
      </div>
    ),
  },
  {
    isExpanded: false,
    title: 'Why  Computer Science Is the Future ?',
    contents: (
      <div>
        With the fast changing connected world, computer science is a key area for future careers across the world. 
        The term computing covers every kind of digital technology that we use to create, store, 
        communicate, exchange and use information
      </div>
    ),
  },
];

const FAQ = () => {
  return (
    <Box as="section" id="faq" sx={styles.accordion}>
      <Container sx={styles.accordion.container}>
        <BlockTitle
          sx={styles.accordion.blockTitle}
          tagline="Frequent Question"
          heading="Do you have any question?"
        />
        <Accordion items={accordionData} />
      </Container>
    </Box>
  );
};
export default FAQ;

const styles = {
  accordion: {
    container: {
      maxWidth: '900px',
    },
    blockTitle: {
      marginBottom: [25, null, null, 65],
      textAlign: 'center',
    },
  },
};
