import Image from "next/image";
import React from "react";
import Link from "next/link";
import cl from "classnames";
import UIDate from '../../date/date'
import ReadTime from '../../read-time/read-time';
import Tag from '../../tags/tags';

const Card4 = ({
  imageUrl,
  text,
  date,
  readTime,
  tags,
  link,
  className: styles,
}) => {
  return (
    <Link
      href={link}
      className={cl(
        "w-88 h-48 flex overflow-hidden border bg-secondary-500",
        styles
      )}
    >
      <div id="textArea" className="min-w-48 w-48 p-3 flex flex-col gap-3">
        <div className="flex space-x-2 text-xs text-primary-100">
          <UIDate date={new Date(date)} />
          <ReadTime readTime={readTime} />
        </div>
        <div className="text-base line-clamp-3">{text}</div>
        <div id="tags" className="flex gap-x-4 gap-y-2 flex-wrap">
          {tags.map((tag) => {
            return (
              <Tag key={tag} variant="small" text={tag} />
            );
          })}
        </div>
      </div>
      <Image
        className="w-96 h-48"
        width={96}
        height={48}
        src={imageUrl}
        alt=""
      />
    </Link>
  );
};

export default Card4;
