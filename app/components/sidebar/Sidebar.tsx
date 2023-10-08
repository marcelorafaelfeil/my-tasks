'use client';

import { Listbox, ListboxItem } from '@nextui-org/react';
import { BsChevronRight } from 'react-icons/bs';
import { FiClock, FiFileText } from 'react-icons/fi';
import IconWrapper from './IconWrapper';

export default function Sidebar() {
  return (
    <Listbox
      aria-label="User menu"
      onAction={() => {}}
      className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium"
      itemClasses={{
        base: 'px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80',
      }}
    >
      <ListboxItem
        key={'timer'}
        startContent={
          <IconWrapper className="bg-success/10 text-success">
            <FiClock />
          </IconWrapper>
        }
        endContent={<BsChevronRight className={'text-default-400 text-sm'} />}
      >
        Timer
      </ListboxItem>
      <ListboxItem
        key={'reports'}
        startContent={
          <IconWrapper className="bg-warning/10 text-warning">
            <FiFileText />
          </IconWrapper>
        }
        endContent={<BsChevronRight className={'text-default-400 text-sm'} />}
      >
        Reports
      </ListboxItem>
    </Listbox>
  );
}
