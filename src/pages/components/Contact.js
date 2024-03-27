"use client";

import React from "react";

function ContactInfo({ name, phoneNumber }) {
  return (
    <div>
      <p>{name}</p>
      <div className="buttons parents" style={{ paddingBottom: "3rem" }}>
        <div className="contact-1-call">
          <a href={`tel:${phoneNumber}`}>
            <div className="icon">
              <img src="/phone.svg" alt="phone icon" />
            </div>
          </a>
        </div>
        <div className="contact-1-msg">
          <a href={`sms:${phoneNumber}`}>
            <div className="icon">
              <img src="/envelope.svg" alt="envelope icon" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

function ParentContact({ title, contacts }) {
  return (
    <div className="parent">
      <p>{title}</p>
      <div className="parents-contact">
        {contacts.map((contact, index) => (
          <ContactInfo
            key={index}
            name={contact.name}
            phoneNumber={contact.phoneNumber}
          />
        ))}
      </div>
    </div>
  );
}

const parentsContacts = {
  groom: [
    { name: "아버지 신희찬", phoneNumber: "010-8258-0870" },
    { name: "어머니 정수희", phoneNumber: "010-9590-2541" },
  ],
  bride: [
    { name: "아버지 김명섭", phoneNumber: "010-4797-2691" },
    { name: "어머니 정순애", phoneNumber: "010-6243-2693" },
  ],
};

export default function Contact() {
  return (
    <div className="contact" style={{ fontFamily: "serif" }}>
      <p className="num">연락처</p>
      <div className="contact-box">
        <ParentContact title="신랑측" contacts={parentsContacts.groom} />
        <ParentContact title="신부측" contacts={parentsContacts.bride} />
      </div>
      <div></div>
    </div>
  );
}
