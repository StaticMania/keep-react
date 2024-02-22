'use client'
import { ChartPieSlice, Copy, Pen, Phone, SignOut, UserCircle, Users } from 'phosphor-react'
import { Avatar, Divider } from '../src'
import { Dropdown } from './Dropdown'

const Page = () => {
  return (
    <section className="py-20">
      <div className="container flex gap-5">
        <Dropdown>
          <Dropdown.List>
            <Dropdown.Item>Contacts</Dropdown.Item>
            <Dropdown.Item>Phone</Dropdown.Item>
            <Dropdown.Item>Statistics</Dropdown.Item>
            <Divider />
            <Dropdown.Item>Rename</Dropdown.Item>
            <Dropdown.Item>Duplicate</Dropdown.Item>
            <Divider />
            <Dropdown.Item>Account</Dropdown.Item>
            <Dropdown.Item>Logout</Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
        <Dropdown>
          <Dropdown.List>
            <Dropdown.Item>
              <Users size={24} />
              Contacts
            </Dropdown.Item>
            <Dropdown.Item>
              <Phone size={24} />
              Phone
            </Dropdown.Item>
            <Dropdown.Item>
              <ChartPieSlice size={24} />
              Statistics
            </Dropdown.Item>
            <Divider />

            <Dropdown.Item>
              <Pen size={24} />
              Rename
            </Dropdown.Item>
            <Dropdown.Item>
              <Copy size={24} />
              Duplicate
            </Dropdown.Item>
            <Divider />
            <Dropdown.Item>
              <UserCircle size={24} />
              Account
            </Dropdown.Item>
            <Dropdown.Item>
              <SignOut size={24} />
              Logout
            </Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
        <Dropdown>
          <Dropdown.List>
            <Dropdown.Item>
              <div>
                <Avatar size="lg" color="secondary" img="/images/avatar/avatar-3.png" />
              </div>
              <div>
                <p className="text-body-5 font-medium text-metal-800">Khairul Islam Ridoy</p>
                <p className="text-body-5 font-normal text-metal-400">UI/UX Designer</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <Avatar size="lg" color="secondary" img="/images/avatar/avatar-1.png" />
              </div>
              <div>
                <p className="text-body-5 font-medium text-metal-800">Zakir Hossain</p>
                <p className="text-body-5 font-normal text-metal-400">Web Designer</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <Avatar size="lg" color="secondary" img="/images/avatar/avatar-2.png" />
              </div>
              <div>
                <p className="text-body-5 font-medium text-metal-800">Atique Hasan</p>
                <p className="text-body-5 font-normal text-metal-400">CEO of StaticMania</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <Avatar size="lg" color="secondary" img="/images/avatar/avatar-4.png" />
              </div>
              <div>
                <p className="text-body-5 font-medium text-metal-800">Kausar Ahamed Pial</p>
                <p className="text-body-5 font-normal text-metal-400">CTO of StaticMania</p>
              </div>
            </Dropdown.Item>
            <Dropdown.Item>
              <div>
                <Avatar size="lg" color="secondary" img="/images/avatar/avatar-5.png" />
              </div>
              <div>
                <p className="text-body-5 font-medium text-metal-800">Md Ariful Islam</p>
                <p className="text-body-5 font-normal text-metal-400">Web Developer</p>
              </div>
            </Dropdown.Item>
          </Dropdown.List>
        </Dropdown>
      </div>
    </section>
  )
}

export default Page
