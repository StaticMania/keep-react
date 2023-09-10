"use client";
import { Avatar, Dropdown } from "~/src";

const DropdownWithAvatar = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <Dropdown.Item>
        <div className="flex items-center gap-3">
          <Avatar shape="round" img="/images/avatar/avatar-1.png" size="md" />
          <div>
            <p className="-mb-1 text-sm font-medium text-slate-700">
              Guy Hawkins
            </p>
            <p className="text-xs font-normal text-slate-500">
              Product Designer
            </p>
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center gap-3">
          <Avatar shape="round" img="/images/avatar/avatar-2.png" size="md" />
          <div>
            <p className="-mb-1 text-sm font-medium text-slate-700">
              Bellanca Sherringham
            </p>
            <p className="text-xs font-normal text-slate-500">VP Accounting</p>
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center gap-3">
          <Avatar shape="round" img="/images/avatar/avatar-3.png" size="md" />
          <div>
            <p className="-mb-1 text-sm font-medium text-slate-700">
              Carlin Tebb
            </p>
            <p className="text-xs font-normal text-slate-500">
              Clinical Specialist
            </p>
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center gap-3">
          <Avatar shape="round" img="/images/avatar/avatar-4.png" size="md" />
          <div>
            <p className="-mb-1 text-sm font-medium text-slate-700">
              Lorena Gregg
            </p>
            <p className="text-xs font-normal text-slate-500">Research Nurse</p>
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center gap-3">
          <Avatar shape="round" img="/images/avatar/avatar-5.png" size="md" />
          <div>
            <p className="-mb-1 text-sm font-medium text-slate-700">
              Geoffry Kingman
            </p>
            <p className="text-xs font-normal text-slate-500">
              Speech Pathologist
            </p>
          </div>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

const DropdownWithAvatarCode = `
"use client";
import { Avatar,Dropdown } from "keep-react";

const DropdownWithAvatar = () => {
  return (
    <Dropdown
      label="Dropdown button"
      type="primary"
      size="sm"
      dismissOnClick={true}
    >
      <Dropdown.Item>
        <div className="flex items-center gap-3">
          <Avatar shape="round" img="/images/avatar/avatar-1.png" size="md" />
          <div>
            <p className="-mb-1 text-sm font-medium text-slate-700">
              Guy Hawkins
            </p>
            <p className="text-xs font-normal text-slate-500">
              Product Designer
            </p>
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center gap-3">
          <Avatar shape="round" img="/images/avatar/avatar-2.png" size="md" />
          <div>
            <p className="-mb-1 text-sm font-medium text-slate-700">
              Bellanca Sherringham
            </p>
            <p className="text-xs font-normal text-slate-500">VP Accounting</p>
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center gap-3">
          <Avatar shape="round" img="/images/avatar/avatar-3.png" size="md" />
          <div>
            <p className="-mb-1 text-sm font-medium text-slate-700">
              Carlin Tebb
            </p>
            <p className="text-xs font-normal text-slate-500">
              Clinical Specialist
            </p>
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center gap-3">
          <Avatar shape="round" img="/images/avatar/avatar-4.png" size="md" />
          <div>
            <p className="-mb-1 text-sm font-medium text-slate-700">
              Lorena Gregg
            </p>
            <p className="text-xs font-normal text-slate-500">Research Nurse</p>
          </div>
        </div>
      </Dropdown.Item>
      <Dropdown.Item>
        <div className="flex items-center gap-3">
          <Avatar shape="round" img="/images/avatar/avatar-5.png" size="md" />
          <div>
            <p className="-mb-1 text-sm font-medium text-slate-700">
              Geoffry Kingman
            </p>
            <p className="text-xs font-normal text-slate-500">
              Speech Pathologist
            </p>
          </div>
        </div>
      </Dropdown.Item>
    </Dropdown>
  );
};

export default DropdownWithAvatar;

`;

export { DropdownWithAvatar, DropdownWithAvatarCode };
