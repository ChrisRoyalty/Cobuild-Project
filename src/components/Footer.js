import { BsPhone, BsHouseDoor } from 'react-icons/bs';
import { TfiEmail } from "react-icons/tfi"

export default function Footer() {
    return (
        <div className='bg-white p-28'>
            <div className='flex md:space-x-28 md:flex-row flex-col space-y-8 justify-center items-center'>
                <div className='flex flex-col items-center space-y-3 mt-3'>
                    <BsHouseDoor size={70} color='#f5af00' />
                    <h4 className='text-[#333333]'>Address</h4>
                    <p className='text-[#999999] text-[10.2px] md:text-[14px] font-normal leading-[24px] text-center'>220 Petersham town, Wardell <br /> street Austrialia PA 6550.</p>
                </div>
                <div className='flex flex-col items-center space-y-3'>
                    <BsPhone size={70} color='#f5af00' />
                    <h1 className='text-[#333333]'>Phone</h1>
                    <p className='text-[#999999] text-[10.2px] md:text-[14px] font-normal leading-[24px] text-center'>Phone:(04) 491 570 00 <br /> Fax: +04 642 021 332</p>
                </div>
                <div className='flex flex-col items-center space-y-3'>
                    <TfiEmail size={70} color='#f5af00' />
                    <h1 className='text-[#333333]'>Email</h1>
                    <p className='text-[#999999] text-[10.2px] md:text-[14px] font-normal leading-[24px] text-center'>support@zytheme.com<br /> Twitter: @zytheme</p>
                </div>
            </div>
        </div>
    )
}
