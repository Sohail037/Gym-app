import Strength_icon from '../assets/dumbbell-icon-vector.png'
import Cardio_icon from '../assets/running-icon.png'
import Fat_icon from '../assets/fire-icon.png'
import Health_icon from '../assets/health-fitness-heart-icon.png'

export const programData = [
    {
        image: <img src={Strength_icon} alt="" className='h-10 w-9 rotate-[135deg]' />,
        heading: 'Strength Training',
        details: 'In this program, you are trained to improve your strength through many exercises.',
    },
    {
        image: <img src={Cardio_icon} alt="" className='h-10 w-9' />,
        heading: 'Cardio Training',
        details: 'In this program, you are trained to do sequential moves in range of 20 until 30 minutes.',
    },
    {
        image: <img src={Fat_icon} alt="" className='h-10 w-[30px]' />,
        heading: 'Fat Burning',
        details: 'This program is suitable for you who wants to get rid of your fat and lose their weight.',
    },
    {
        image: <img src={Health_icon} alt="" className='h-9 w-9' />,
        heading: 'Health Fitness',
        details: 'This programs is designed for those who exercises only for their body fitness not body building.',
    }
]
