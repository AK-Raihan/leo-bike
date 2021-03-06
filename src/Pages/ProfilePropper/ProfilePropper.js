import React from 'react';
import { Image, Nav, OverlayTrigger, Popover, Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';


const ProfilePopper = () => {
    const { user, logout } = useAuth();

    const signOut = () => {
        logout()
        toast.error('Logged Out')
    }

    return (
        <OverlayTrigger
            trigger="click"
            placement="bottom"
            overlay={
                <Popover id="popover-basic">
                    <Popover.Body>
                    <div className="d-flex justify-content-center mt-1">
                        <Image style={{ maxWidth: "60px" }} src={user?.photoURL || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'} roundedCircle />
                    </div>  
                        <strong className="text-center d-block">{user.displayName}</strong>
                        <strong className="text-center d-block">{user.email}</strong>
                        <div className="d-flex justify-content-center mt-1">
                            <Button onClick={signOut}
                                variant="outline-info"
                                className="py-0 px-1"
                                size="sm"> Logout
                            </Button>
                        </div>
                    </Popover.Body>
                </Popover>
            }>
            <Nav.Link className="p-0">
                <Image
                    src={user?.photoURL || 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'}
                    width="45"
                    height="45"
                    roundedCircle
                    className="d-inline-block align-top"
                    alt="Profile"
                />
            </Nav.Link>

        </OverlayTrigger>
    );
};

export default ProfilePopper;