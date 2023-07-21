import { BsPhone, BsHouseDoor } from 'react-icons/bs';
import { TfiEmail } from "react-icons/tfi"

export default function Footer() {
    return (
        <div>
            <div className='grid grid-cols-3 mx-4'>
                <div>
                    <BsHouseDoor size={50} color='#f5af00' />
                    <h1>Address</h1>
                    <p>220 Petersham town, Wardell <br /> street Austrialia PA 6550.</p>
                </div>
                <div>
                    <BsPhone size={50} color='#f5af00' />
                    <h1>Phone</h1>
                    <p>Phone:(04) 491 570 00 <br /> Fax: +04 642 021 332</p>
                </div>
                <div>
                    <TfiEmail size={50} color='#f5af00' />
                    <h1>Email</h1>
                    <p>support@zytheme.com<br /> Twitter: @zytheme</p>
                </div>
            </div>
        </div>
    )
}
