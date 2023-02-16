import { useState, Fragment } from 'react';
import { MenuItem } from './';

function Sidebar() {
    const [showLogout, setShowLogout] = useState(false);
    const [showMoreNumber, setShowMoreNumber] = useState(true);

    return (
        <div>
            <div className='menu-sidebar w-220 h-screen flex flex-col bg-2A3A75 max-h-screen overflow-auto scrollbar-custom'>
                <div className='flex-1' >
                    <div className='w-full p-2 pt-4'>
                        <div className="flex w-full p-2">
                            <div className="flex justify-center items-center h-8 w-8 bg-black rounded-lg">
                                < img src={'/images/icon/A.svg'} alt="A" />
                            </div>
                            <div className="flex-1 pl-3">
                                <p className="text-base uppercase font-semibold leading-8 text-white">ACME</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <MenuItem
                            className='h-12 mb-1 hover:bg-white-10 bg-0055A3'
                            title='Inbox'
                            icon='/images/icon/inbox.svg'
                            pending={5}
                        />
                        <MenuItem
                            className='h-12 mb-1 hover:bg-white-10'
                            title='Broadcasts'
                            icon='/images/icon/broadcast.svg'
                        />
                        <MenuItem
                            className='h-12 mb-1 hover:bg-white-10'
                            title='Inbox'
                            icon='/images/icon/card.svg'
                        />
                        <MenuItem
                            className='h-12 mb-1 hover:bg-white-10'
                            title='Team'
                            icon='/images/icon/users.svg'
                            extral
                        />
                        <MenuItem
                            className='h-12 mb-1 hover:bg-white-10'
                            title='Bookmarks'
                            icon='/images/icon/bookmarks.svg'
                            disable
                        />
                        <MenuItem
                            className='h-12 mb-1 hover:bg-white-10'
                            title='Scheduled'
                            icon='/images/icon/scheduled.svg'
                            disable
                        />
                        <div className="flex menu-point-gr cursor-pointer rounded-lg p-2.5" onClick={() => { setShowMoreNumber(!showMoreNumber) }}>
                            <div className={`flex-1 pl-2 items-center`}>
                                <h2 className={`text-sm font-medium  text-left leading-6 disable-coppy text-white-40 line-clamp-1 uppercase`}>NUMBERS</h2>
                            </div>
                            <div>
                                <img src="/images/icon/add.svg" alt="add" className="disable-select" />
                            </div>
                        </div>
                        {
                            showMoreNumber &&
                            <Fragment>
                                <MenuItem
                                    className='h-12 mb-1 hover:bg-white-10'
                                    title='Main Number'
                                    icon='/images/icon/globe.svg'
                                    pending={3}
                                />
                                <MenuItem
                                    className='h-12 mb-1 hover:bg-white-10'
                                    title='Helpdesk'
                                    icon='/images/icon/helpdesk.svg'
                                    pending={2}
                                />
                                <MenuItem
                                    className='h-12 mb-1 hover:bg-white-10'
                                    title='Brooklyn St..'
                                    icon='/images/icon/shop-cart.svg'
                                    pending={1}
                                    moon
                                />
                            </Fragment>
                        }

                    </div>
                </div>
                <div className='flex flex-col items-end bg-custom shadow-top border-t border-solid border-gray-40 p-2'>
                    <div className="rounded-lg border border-white-20 p-2 w-full mb-2">
                        <div className='flex w-full mb-2'>
                            <p className="flex-1 text-sm text-white font-medium leading-6">TalkNText Desktop</p>
                            <span className="px-2 leading-6 text-xs text-2A3A75 bg-white rounded-lg font-semibold">BETA</span>
                        </div>
                        <p className="text-sm text-white-60 font-medium">Help us build the perfect user experience. <span className="text-0085E5">Share feedback</span> </p>
                    </div>
                    <div className='w-full box-border p-2 flex cursor-pointer hover:bg-white-10 rounded-lg relative' onClick={() => { setShowLogout(!showLogout) }}>
                        <div className="w-8 flex items-center relative">
                            <div className='w-8 h-8 rounded-full overflow-hidden'>
                                <img src='/images/icon/avatar-default.svg' alt='avatar' className='h-full w-full' />
                            </div>
                            <div className="absolute -bottom-0.5 -right-0.5 rounded-full p-0.5 bg-2A3A75">
                                <div className="bg-01B976 w-2 h-2 rounded-full"></div>
                            </div>
                        </div>
                        <div className='flex-1 pl-3 flex items-center'>
                            <p className='font-semibold text-sm text-white text-left leading-6 line-clamp-1 disable-coppy'>
                                Tom Neal
                            </p>
                        </div>
                        <div className='flex justify-center items-center'>
                            <div>
                                <img src='/images/icon/dropdown.svg' alt='dropdown' className={`${showLogout ? 'rotate-180' : ''}`} />
                            </div>
                        </div>

                        {
                            showLogout ?
                                <div className='w-full bg-050B30 shadow-custom rounded-lg p-2 z-6 absolute bottom-0 left-0'>
                                    <div className='flex flex-row items-center p-2 pr-0 rounded-lg cursor-pointer hover:bg-white-10' >
                                        <img src='/images/icon/ring-green.svg' alt='ring' className='h-6 w-6' />
                                        <span className='text-sm text-white font-semibold ml-3 flex-1'>Available</span>
                                        <div>
                                            <img src='/images/icon/dropdown.svg' alt='dropdown' className='w-6 h-6 -rotate-90' />
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center p-2 pr-0 rounded-lg cursor-pointer hover:bg-white-10' >
                                        <img src='/images/icon/user.svg' alt='user' className='h-6 w-6' />
                                        <span className='text-sm text-white font-semibold ml-3 flex-1'>Account & Profile</span>
                                        <div>
                                            <img src='/images/icon/log-out.svg' alt='log out' className='w-6 h-6' />
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center p-2 rounded-lg cursor-pointer hover:bg-white-10' >
                                        <img src='/images/icon/off.svg' alt='off' className='h-6 w-6' />
                                        <span className='text-sm text-white font-semibold ml-3 flex-1'>Log Out</span>
                                    </div>
                                    <div className="flex p-2 cursor-pointer hover:bg-white-10 rounded-lg">
                                        <div className="w-8 flex items-center relative">
                                            <div className='w-8 h-8 rounded-full overflow-hidden'>
                                                <img src='/images/icon/avatar-default.svg' alt='avatar' className='h-full w-full' />
                                            </div>
                                            <div className="absolute -bottom-0.5 -right-0.5 rounded-full p-0.5 bg-2A3A75">
                                                <div className="bg-01B976 w-2 h-2 rounded-full"></div>
                                            </div>
                                        </div>
                                        <div className='flex-1 pl-3 flex items-center'>
                                            <p className='font-semibold text-sm text-white text-left leading-6 line-clamp-1 disable-coppy'>
                                                Tom Neal
                                            </p>
                                        </div>
                                    </div>
                                </div> : null
                        }
                    </div>
                </div>
            </div>
        </div >
    );
}

export { Sidebar };