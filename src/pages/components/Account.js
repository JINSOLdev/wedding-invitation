'use client';

import React, { useState } from 'react';

const AccountSection = ({ title, accounts, onCopy }) => {
    return (
        <div>
            <li className='li' style={{ fontWeight: 'bold' }}>{title}</li>
            <div className="divide"></div>
            {accounts.map((account, index) => (
                <div className="account-row" key={index}>
                    <div className="account-row-column-text">
                        <li>{account.name}</li>
                        <li>{account.accountNumber}</li>
                    </div>
                    <button className="btn-copy" onClick={() => onCopy(account.accountNumber)}>
                        복사하기
                    </button>
                </div>
            ))}
        </div>
    );
};

const Account = () => {
    const [isClicked, setIsClicked] = useState(false);
    const [currentAccount, setCurrentAccount] = useState(null);

    const accounts = {
        acc_m: [
            { name: '아버지 신희찬', accountNumber: '기업 486-009145-01-084' },
            { name: '어머니 정수희', accountNumber: '우리 39908019266' },
        ],
        acc_w: [
            { name: '아버지 김명섭', accountNumber: '신한 624-12-222160' },
            { name: '어머니 정순애', accountNumber: '우리 414-032004-12-001' },
        ],
    };

    const handleAccount = (event) => {
        setIsClicked(true);
        setCurrentAccount(event.target.id);
    };

    const handleConfirm = () => {
        setIsClicked(false);
    };

    const copyInfo = (text) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                alert('복사되었습니다.');
            })
            .catch((err) => {
                console.error('복사 실패: ', err);
            });
    };

    return (
        <div className="wrapper">
            {isClicked && (
                <div className="modal-wrap">
                    <div className="modal-box">
                        <div className="modal-content">
                            <div className="modal-context-m">
                                <ul className='ul'>
                                    {currentAccount && (
                                        <AccountSection
                                            title={currentAccount === 'acc_m' ? '신랑측' : '신부측'}
                                            accounts={accounts[currentAccount]}
                                            onCopy={copyInfo}
                                        />
                                    )}
                                </ul>
                            </div>
                        </div>
                        <div className="modal-button">
                            <button className="btn-confirm" onClick={handleConfirm}>
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="account-info">
                <p>마음 전하실 곳</p>
                <br />
                <button className="acc-btn1" onClick={handleAccount} id="acc_m">
                    신랑측 계좌번호 보기
                </button>
                <button className="acc-btn2" onClick={handleAccount} id="acc_w">
                    신부측 계좌번호 보기
                </button>
            </div>
            <div className="divide-line" />
        </div>
    );
};

export default Account;
