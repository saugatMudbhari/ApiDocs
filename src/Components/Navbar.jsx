import React from 'react'
import { Menu } from 'semantic-ui-react'

const Navbar = () => {

    return (
        <>
            <div className="side_nav">
                <Menu secondary vertical style={{ background: 'none', }}>
                    <Menu.Item >
                        <Menu.Menu style={{ color: "black", fontSize: '20px' }}>
                            <Menu.Item
                                name='enterprise'
                            />
                            <Menu.Item
                                name='consumer'
                            />
                            <Menu.Item
                                name='consumer'
                            />
                        </Menu.Menu>
                    </Menu.Item>
                </Menu>
            </div>
        </>
    )
}

export default Navbar