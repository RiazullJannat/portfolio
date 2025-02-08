'use client'
import { FaPhoneAlt, FaWhatsappSquare } from 'react-icons/fa';
import { toast } from 'react-toastify';
const PhoneNumber = () => {
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
            .then(() => toast.success('copied successfully.', {
                position:'top-center',
                className: "toast-message"
            }))
            .catch(() => toast.error('sorry! there was an error.'))
    }
    return (
        <div className='flex gap-4 justify-center'>
            <p
                className='flex gap-2 items-center text-xl cursor-pointer'
                onClick={() => copyToClipboard('+8801948848898')}
            >
                <FaWhatsappSquare />Whatsapp:<strong>+8801948848898</strong>
            </p>
            <p
                className='flex gap-2 items-center text-xl cursor-pointer'
                onClick={() => copyToClipboard('+8801948848898')}
            >
                <FaPhoneAlt />Phone:<strong>+8801948848898</strong>
            </p>
        </div>
    );
};

export default PhoneNumber;