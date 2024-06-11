import React from 'react'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png';
import pintester_icon from '../assets/pintester_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png'

export default function Footer() {
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center pt-5'>
                <img src={footer_logo} alt='footer_logo' />
                <span className='fs-2'>STOP&SHOP</span>
            </div>
            <div className='d-flex justify-content-center align-items-center py-4'>
            <ul class="list-group list-group-horizontal">
                <li class="list-group-item border-0">Company</li>
                <li class="list-group-item border-0">Products</li>
                <li class="list-group-item border-0">Offices</li>
                <li class="list-group-item border-0">About</li>
                <li class="list-group-item border-0">Contact</li>
            </ul>
            </div>
            <div className='d-flex justify-content-center align-items-center'> 
                <div className='me-4'>
                    <img src={instagram_icon} alt='instagram_icon' />
                </div>
                <div className='me-4 '>
                    <img src={pintester_icon} alt='pintester_icon' />
                </div>
                <div className='me-4'>
                    <img src={whatsapp_icon} alt='whatsapp_icon' />
                </div>
            </div>
            <div>
                <hr />
                <p className='text-center'>Copyright @ 2024 - All Rights Reserved.</p>
            </div>
        </div>
    )
}
