import { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import interior1 from '../../image/black-and-grey-living-room.jpg';
import interior2 from '../../image/interior-design-yellow-armchair-scaled.jpeg';
import interior3 from '../../image/dark-living-room.jpg';
import interior4 from '../../image/joujouarchviz-untitled13.jpg';
import interior5 from '../../image/light-ddeco2.jpg';

const About = () => {
    const images = [
        interior1,
        interior2,
        interior3,
        interior4,
        interior5,
    ];
    const maxSteps = images.length;
    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    return (
        <Container maxWidth="lg" sx={{ marginTop: '150px', minHeight: '50vh' }}>
            <Typography variant='h4' textAlign='center'>
                About
            </Typography>
            <Typography variant='subtitle1' textAlign='center'>
                Who we are?
            </Typography>
            <Box sx={{ width: '100%', mt: 5}}>
                <Box
                component="img" 
                src={images[activeStep]} 
                alt='interior design'
                sx={{ 
                    width: '100%', 
                    display: 'block' 
                }} 
                />
            </Box>
            <MobileStepper
            steps={maxSteps}
            position='static'
            activeStep={activeStep}
            sx={{ bgcolor: 'transparent' }}
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                <KeyboardArrowRight />
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                <KeyboardArrowLeft />
              </Button>
            }
            />
            <Box sx={{ background: '#fff', mt: 5, mb: 10, p: 5, borderRadius: '10px' }}>
                <Typography color='text.dark' component='p' mb={2} sx={{ textIndent: '20px' }}>
                    At Home-Designing, we document inspiration. Our aim is to bring to our readers a steady set of resources that would help them visualize, create and maintain beautiful homes. Our emphasis is on visuals that motivate you. We cover architectural innovations, cool homes, ideas for specific rooms, new design trends, products and occasionally decor tips. We hope to become your one stop source for home design inspiration!
                </Typography>
                <Typography color='text.dark' component='p' sx={{ textIndent: '20px' }}>
                    With more than 20 years of design involvement, we have the expertise, learning, and scrupulousness to comfort your psyche through the design procedure. expansion to our stylish design, our venture the executives and specialized illustration abilities, guarantee our activities are on spending plan, on time, and line up with your vision.
                </Typography>
            </Box>
        </Container>
    )
}

export default About;