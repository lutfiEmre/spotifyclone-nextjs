'use client'
import Image from "next/image";
import main1 from '/public/main1.svg'
import main2 from '/public/main2.svg'
import main3 from '/public/main3.svg'
import main4 from '/public/main4.svg'
import main5 from '/public/main5.svg'
import main6 from '/public/main6.svg'
import main7 from '/public/main7.svg'
import main8 from '/public/main8.svg'
import main9 from '/public/main9.svg'
import main10 from '/public/main10.svg'
import {useState} from "react";



export default function Home() {
    const [login,setLogin] = useState({
        type: 'login'
    })
  return (
    <main className="flex min-h-screen w-full h-screen">
      <div className={'flex flex-row w-full h-full'}>
          <div className={'w-[241px] bg-black flex-col flex justify-between items-start min-h-screen h-full pb-[32px] p-[24.82px]'}>
            <div className={'flex flex-col'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="131" height="40" viewBox="0 0 131 40" fill="none">
                    <path d="M0.924316 19.6155C0.924316 30.2434 9.70386 39.0229 20.3317 39.0229C30.9596 39.0229 39.7391 30.2434 39.7391 19.6155C39.7391 8.98763 30.9596 0.323608 20.3317 0.323608C9.70386 0.323608 0.924316 8.98763 0.924316 19.6155ZM27.494 28.6261C22.9887 25.8536 17.2127 25.1605 10.5125 26.6622C8.89522 26.8933 8.66417 24.5829 10.0504 24.3518C17.4437 22.619 23.6818 23.4277 28.7647 26.5467C30.0354 27.3554 28.7647 29.3192 27.494 28.6261ZM29.4578 23.4277C24.2594 20.1931 16.2885 19.2689 10.1659 21.1173C8.20209 21.6949 7.50897 18.6913 9.3573 18.2293C16.404 16.1499 25.0681 17.1896 31.0751 20.8862C32.6924 21.9259 31.0751 24.4673 29.4578 23.4277ZM9.24178 15.2257C7.27793 15.9188 6.00721 12.5688 8.20209 11.7601C15.0178 9.68075 26.5698 10.0273 33.7321 14.3016C35.6959 15.3412 33.8476 18.5758 31.7682 17.4206C25.5301 13.724 15.1333 13.3774 9.24178 15.2257ZM53.024 25.7381C51.0601 25.7381 49.2118 25.0449 47.5945 23.4277C47.479 23.4277 47.479 23.5432 47.479 23.5432L45.6307 25.7381C45.5151 25.8536 45.5151 25.9691 45.6307 26.0846C47.71 27.933 50.2515 28.8571 53.024 28.8571C56.9517 28.8571 59.3776 26.6622 59.3776 23.4277C59.3776 20.6552 57.6448 19.1534 53.6016 18.1137C50.2515 17.3051 49.6739 16.7275 49.6739 15.5723C49.6739 14.4171 50.8291 13.724 52.3308 13.724C53.8326 13.724 55.2188 14.3016 56.8361 15.4568C56.8361 15.4568 56.9517 15.5723 57.0672 15.5723C57.1827 15.5723 57.1827 15.4568 57.1827 15.4568L58.8 13.1464C58.9155 13.0308 58.9155 13.0308 58.8 12.9153C56.9517 11.4136 54.7568 10.6049 52.3308 10.6049C48.7497 10.6049 46.2083 12.7998 46.2083 15.9188C46.2083 19.2689 48.5187 20.3086 52.2153 21.2328C55.4499 21.9259 55.912 22.619 55.912 23.7742C55.912 25.0449 54.7568 25.7381 53.024 25.7381ZM63.9984 16.843V15.3412C63.9984 15.2257 63.8829 15.1102 63.7673 15.1102H60.7638C60.6483 15.1102 60.5328 15.2257 60.5328 15.3412V32.3227C60.5328 32.4382 60.6483 32.5538 60.7638 32.5538H63.7673C63.8829 32.5538 63.9984 32.4382 63.9984 32.3227V27.0088C65.1536 28.2795 66.4243 28.8571 68.1571 28.8571C71.2762 28.8571 74.3952 26.4312 74.3952 21.8104C74.3952 17.1896 71.2762 14.8792 68.1571 14.8792C66.4243 14.8792 65.1536 15.4568 63.9984 16.843ZM67.464 25.8536C65.3846 25.8536 63.8829 24.1208 63.8829 21.8104C63.8829 19.5 65.3846 17.8827 67.464 17.8827C69.5434 17.8827 70.9296 19.5 70.9296 21.8104C70.9296 24.1208 69.5434 25.8536 67.464 25.8536ZM75.3194 21.9259C75.3194 25.8536 78.4384 28.8571 82.4816 28.8571C86.5248 28.8571 89.6439 25.7381 89.6439 21.8104C89.6439 17.8827 86.6404 14.8792 82.5972 14.8792C78.5539 14.8792 75.3194 17.9982 75.3194 21.9259ZM78.785 21.8104C78.785 19.5 80.2867 17.8827 82.4816 17.8827C84.6765 17.8827 86.2938 19.6155 86.2938 21.9259C86.2938 24.2363 84.792 25.8536 82.5972 25.8536C80.4023 25.8536 78.785 24.1208 78.785 21.8104ZM94.9578 15.1102V11.7601C94.9578 11.6446 94.9578 11.5291 94.8423 11.5291H91.8388C91.7233 11.5291 91.6077 11.6446 91.6077 11.7601V15.1102H90.106C89.9904 15.1102 89.8749 15.2257 89.8749 15.3412V17.8827C89.8749 17.9982 89.9904 18.1137 90.106 18.1137H91.6077V24.8139C91.6077 27.4709 92.8785 28.8571 95.5354 28.8571C96.5751 28.8571 97.6148 28.6261 98.4234 28.164C98.5389 28.164 98.5389 28.0485 98.5389 27.933V25.507C98.5389 25.3915 98.5389 25.276 98.4234 25.276H98.1924C97.6148 25.6226 96.9217 25.7381 96.3441 25.7381C95.4199 25.7381 94.9578 25.276 94.9578 24.3518V18.1137H98.4234C98.5389 18.1137 98.6545 17.9982 98.6545 17.8827V15.3412C98.6545 15.2257 98.5389 15.1102 98.4234 15.1102H94.9578ZM109.86 14.7636C109.86 13.4929 110.322 13.0308 111.362 13.0308C111.939 13.0308 112.517 13.0308 113.095 13.2619H113.21C113.21 13.2619 113.326 13.1464 113.326 13.0308V10.6049C113.326 10.4894 113.326 10.3739 113.21 10.3739C112.632 10.1428 111.824 10.0273 110.669 10.0273C107.896 10.0273 106.51 11.6446 106.51 14.5326V15.1102H105.008C104.893 15.1102 104.777 15.2257 104.777 15.3412V17.8827C104.777 17.9982 104.893 18.1137 105.008 18.1137H106.51V28.395C106.51 28.5106 106.625 28.6261 106.741 28.6261H109.744C109.86 28.6261 109.86 28.5106 109.86 28.395V18.1137H112.748L117.022 28.395C116.56 29.4347 116.098 29.6658 115.405 29.6658C114.827 29.6658 114.25 29.5502 113.672 29.2037H113.557L113.441 29.3192L112.401 31.5141C112.401 31.6296 112.401 31.8606 112.517 31.8606C113.557 32.4382 114.481 32.6693 115.636 32.6693C117.831 32.6693 119.102 31.6296 120.141 28.8571L125.34 15.4568V15.2257C125.34 15.1102 125.224 15.1102 125.109 15.1102H121.99C121.874 15.1102 121.874 15.2257 121.874 15.3412L118.639 24.3518L115.174 15.3412C115.174 15.2257 115.058 15.1102 114.943 15.1102H109.86V14.7636ZM100.272 15.1102C100.156 15.1102 100.041 15.2257 100.041 15.3412V28.395C100.041 28.5106 100.156 28.6261 100.272 28.6261H103.275C103.391 28.6261 103.391 28.5106 103.391 28.395V15.3412C103.391 15.2257 103.391 15.1102 103.275 15.1102H100.272ZM99.5786 11.298C99.5786 12.4532 100.618 13.4929 101.774 13.4929C102.929 13.4929 103.853 12.4532 103.853 11.298C103.853 10.1428 102.929 9.21867 101.774 9.21867C100.618 9.21867 99.5786 10.1428 99.5786 11.298ZM127.881 19.2689C129.036 19.2689 130.076 18.3448 130.076 17.1896C130.076 16.0344 129.036 15.1102 127.881 15.1102C126.726 15.1102 125.802 16.0344 125.802 17.1896C125.802 18.3448 126.726 19.2689 127.881 19.2689ZM127.881 15.3412C128.921 15.3412 129.845 16.1499 129.845 17.1896C129.845 18.2293 128.921 19.0379 127.881 19.0379C126.841 19.0379 126.033 18.2293 126.033 17.1896C126.033 16.1499 126.841 15.3412 127.881 15.3412ZM128.343 17.4206C128.69 17.3051 128.921 17.074 128.921 16.7275C128.921 16.2654 128.459 16.0344 127.997 16.0344H127.072V18.2293H127.535V17.5361H127.997L128.459 18.2293H129.036L128.343 17.4206ZM127.997 16.3809C128.228 16.3809 128.459 16.4964 128.459 16.7275C128.459 16.9585 128.228 17.074 127.997 17.074H127.535V16.3809H127.997Z" fill="white"/>
                </svg>
                <div className={'mt-[33px] flex flex-col gap-[20px]'}>
                    <div className={'flex flex-row group cursor-pointer gap-[14px] items-center'}>
                        <svg className={'w-[24px] h-[24px]'} xmlns="http://www.w3.org/2000/svg" width="48" height="59" viewBox="0 0 48 59" fill="none">
                            <path d="M24 3L2 25V57H17.5V40.5H30.5V57H46V25L24 3Z" stroke="white" stroke-opacity="0.7" stroke-width="4"/>
                        </svg>
                        <h5 className={'font-semibold select-none group-hover:text-white text-[#B3B3B3] mt-1'}>Home </h5>
                    </div>
                    <div className={'flex flex-row group cursor-pointer gap-[14px] items-center'}>
                        <svg className={'w-[24px] h-[24px]'} xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M10.533 1.3727C5.35298 1.3727 1.12598 5.5127 1.12598 10.6517C1.12598 15.7907 5.35198 19.9307 10.533 19.9307C12.767 19.9307 14.823 19.1607 16.44 17.8727L20.793 22.2257C20.8852 22.3212 20.9956 22.3974 21.1176 22.4498C21.2396 22.5022 21.3708 22.5298 21.5036 22.531C21.6364 22.5321 21.768 22.5068 21.8909 22.4565C22.0138 22.4062 22.1255 22.332 22.2194 22.2381C22.3133 22.1442 22.3875 22.0326 22.4378 21.9097C22.4881 21.7868 22.5134 21.6551 22.5122 21.5223C22.5111 21.3895 22.4835 21.2583 22.4311 21.1363C22.3787 21.0143 22.3025 20.904 22.207 20.8117L17.863 16.4677C19.2079 14.828 19.942 12.7724 19.94 10.6517C19.94 5.5117 15.714 1.3717 10.533 1.3717V1.3727ZM3.12598 10.6517C3.12598 6.6457 6.42798 3.3717 10.533 3.3717C14.638 3.3717 17.94 6.6457 17.94 10.6517C17.94 14.6577 14.638 17.9307 10.533 17.9307C6.42798 17.9307 3.12598 14.6587 3.12598 10.6517Z" fill="white" fill-opacity="0.7"/>
                        </svg>
                        <h5 className={'font-semibold text-[#B3B3B3] group-hover:text-white select-nones mt-1'}>Search</h5>

                    </div>
                    <div className={'flex flex-row group cursor-pointer gap-[14px] items-center'}>
                        <svg className={'w-[24px] h-[24px]'} xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M12.5 0.22775C12.652 0.139982 12.8245 0.0937755 13 0.0937755C13.1755 0.0937755 13.348 0.139982 13.5 0.22775L19.5 3.69175C19.652 3.77952 19.7783 3.90575 19.866 4.05776C19.9538 4.20978 20 4.38222 20 4.55775V19.0938C20 19.359 19.8946 19.6133 19.7071 19.8009C19.5196 19.9884 19.2652 20.0938 19 20.0938H13C12.7348 20.0938 12.4804 19.9884 12.2929 19.8009C12.1054 19.6133 12 19.359 12 19.0938V1.09375C12 0.918218 12.0462 0.745779 12.134 0.593764C12.2217 0.44175 12.348 0.315516 12.5 0.22775ZM17.5 10L14 18.0938L16.5 6L18 5.13475L17.5 10ZM1 20.0938C0.734784 20.0938 0.48043 19.9884 0.292893 19.8009C0.105357 19.6133 0 19.359 0 19.0938V1.09375C0 0.828534 0.105357 0.57418 0.292893 0.386643C0.48043 0.199107 0.734784 0.09375 1 0.09375C1.26522 0.09375 1.51957 0.199107 1.70711 0.386643C1.89464 0.57418 2 0.828534 2 1.09375V19.0938C2 19.359 1.89464 19.6133 1.70711 19.8009C1.51957 19.9884 1.26522 20.0938 1 20.0938ZM7 20.0938C6.73478 20.0938 6.48043 19.9884 6.29289 19.8009C6.10536 19.6133 6 19.359 6 19.0938V1.09375C6 0.828534 6.10536 0.57418 6.29289 0.386643C6.48043 0.199107 6.73478 0.09375 7 0.09375C7.26522 0.09375 7.51957 0.199107 7.70711 0.386643C7.89464 0.57418 8 0.828534 8 1.09375V19.0938C8 19.359 7.89464 19.6133 7.70711 19.8009C7.51957 19.9884 7.26522 20.0938 7 20.0938Z" fill="white" fill-opacity="0.7"/>
                        </svg>
                        <h5 className={'font-semibold group-hover:text-white select-none text-[#B3B3B3] mt-1'}>Your Library</h5>

                    </div>
                </div>
                <div className={'mt-[42px] flex flex-col gap-[20px]'}>
                    <div className={'flex group cursor-pointer flex-row gap-[14px] items-center'}>
                        <svg className={'fill-[#B3B3B3] w-[24px] h-[24px]'} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.09375" width="24" height="24" rx="2" fill=""/>
                            <g clip-path="url(#clip0_102_37)">
                                <path d="M17.4375 12.0938C17.4375 12.2429 17.3782 12.386 17.2727 12.4915C17.1673 12.597 17.0242 12.6562 16.875 12.6562H12.5625V16.9688C12.5625 17.1179 12.5032 17.261 12.3977 17.3665C12.2923 17.472 12.1492 17.5312 12 17.5312C11.8508 17.5312 11.7077 17.472 11.6023 17.3665C11.4968 17.261 11.4375 17.1179 11.4375 16.9688V12.6562H7.125C6.97582 12.6562 6.83274 12.597 6.72725 12.4915C6.62176 12.386 6.5625 12.2429 6.5625 12.0938C6.5625 11.9446 6.62176 11.8015 6.72725 11.696C6.83274 11.5905 6.97582 11.5312 7.125 11.5312H11.4375V7.21875C11.4375 7.06957 11.4968 6.92649 11.6023 6.821C11.7077 6.71551 11.8508 6.65625 12 6.65625C12.1492 6.65625 12.2923 6.71551 12.3977 6.821C12.5032 6.92649 12.5625 7.06957 12.5625 7.21875V11.5312H16.875C17.0242 11.5312 17.1673 11.5905 17.2727 11.696C17.3782 11.8015 17.4375 11.9446 17.4375 12.0938Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_102_37">
                                    <rect width="12" height="12" fill="" transform="translate(6 6.09375)"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <h5 className={'font-semibold group-hover:text-white select-none text-[#B3B3B3] mt-1'}>Create Playlist </h5>
                    </div>
                    <div className={'flex flex-row cursor-pointer group gap-[14px] items-center'}>
                        <svg className={'w-[24px] h-[24px]'} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.7">
                                <rect y="0.09375" width="24" height="24" rx="2" fill="url(#paint0_linear_0_176)"/>
                                <g clip-path="url(#clip0_0_176)">
                                    <path d="M17.7931 9.25878C17.6635 8.61423 17.3406 8.02449 16.8673 7.56812C16.3941 7.11175 15.793 6.81042 15.1441 6.70428C14.6567 6.62657 14.1578 6.66263 13.6866 6.80965C13.2153 6.95667 12.7845 7.21066 12.4276 7.55178C12.3115 7.65979 12.1588 7.71984 12.0001 7.71984C11.8415 7.71984 11.6888 7.65979 11.5726 7.55178C10.9802 6.97876 10.1898 6.65608 9.36556 6.65082C8.54137 6.64556 7.74685 6.95812 7.14716 7.52353C6.54747 8.08894 6.18873 8.86371 6.14552 9.68679C6.10231 10.5099 6.37795 11.3179 6.91515 11.943L11.3521 17.2305C11.4316 17.325 11.5307 17.401 11.6426 17.4531C11.7544 17.5052 11.8764 17.5322 11.9998 17.5322C12.1232 17.5322 12.2451 17.5052 12.357 17.4531C12.4689 17.401 12.568 17.325 12.6474 17.2305L17.0844 11.943C17.3982 11.5788 17.625 11.1481 17.7478 10.6833C17.8706 10.2185 17.8861 9.73192 17.7931 9.26028V9.25878Z" fill="white"/>
                                </g>
                            </g>
                            <defs>
                                <linearGradient id="paint0_linear_0_176" x1="0" y1="0.09375" x2="24" y2="24.0938" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#450AF5"/>
                                    <stop offset="1" stop-color="#C4EFD9"/>
                                </linearGradient>
                                <clipPath id="clip0_0_176">
                                    <rect width="12" height="12" fill="white" transform="translate(6 6.09375)"/>
                                </clipPath>
                            </defs>
                        </svg>

                        <h5 className={'select-none group-hover:text-white font-semibold text-[#B3B3B3] mt-1'}>
                            Liked Songs
                        </h5>

                    </div>
                </div>
            </div>
            <div className={'text-[#A7A7A7] flex flex-col gap-[33px]'}>
                <div className={'flex flex-row flex-wrap items-center text-[11px] w-[130px] gap-[15px]'}>
                    <h5 className={'cursor-pointer'}>
                        Legal
                    </h5>
                    <h5 className={'cursor-pointer'}>
                        Privacy Center
                    </h5>
                    <h5 className={'cursor-pointer'}>
                        Privacy Policy
                    </h5>
                    <h5 className={'cursor-pointer'}>
                        Cookies
                    </h5>
                    <h5 className={'cursor-pointer'}>
                        About Ads
                    </h5>
                    <svg className={'w-[25px] cursor-pointer h-[20px]'} xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.49495 11.5052H12.1616L14.745 1.83856H6.49495C3.82829 1.83856 1.66162 4.00523 1.66162 6.6719C1.66162 9.33856 3.82829 11.5052 6.49495 11.5052Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.1616 0.838562H6.49495C3.24495 0.838562 0.661621 3.4219 0.661621 6.6719C0.661621 9.9219 3.24495 12.5052 6.49495 12.5052H19.1616C22.4116 12.5052 24.995 9.9219 24.995 6.6719C24.995 3.4219 22.3283 0.838562 19.1616 0.838562ZM1.66162 6.6719C1.66162 4.00523 3.82829 1.83856 6.49495 1.83856H14.745L12.1616 11.5052H6.49495C3.82829 11.5052 1.66162 9.33856 1.66162 6.6719Z" fill="#0066FF"/>
                        <path d="M20.8281 4.17188C20.9948 4.33854 20.9948 4.67188 20.8281 4.83854L19.0781 6.67188L20.9115 8.50521C21.0781 8.67188 21.0781 9.00521 20.9115 9.17188C20.7448 9.33854 20.4115 9.33854 20.2448 9.17188L18.4115 7.33854L16.5781 9.17188C16.4115 9.33854 16.0781 9.33854 15.9115 9.17188C15.7448 9.00521 15.7448 8.67188 15.9115 8.50521L17.6615 6.67188L15.8281 4.83854C15.6615 4.67188 15.6615 4.33854 15.8281 4.17188C15.9948 4.00521 16.3281 4.00521 16.4948 4.17188L18.3281 6.00521L20.1615 4.17188C20.3281 4.00521 20.6615 4.00521 20.8281 4.17188Z" fill="white"/>
                        <path d="M10.9115 4.25525C11.0781 4.42192 11.1615 4.75525 10.9948 4.92192L7.49479 9.00525C7.41146 9.08858 7.32812 9.17192 7.24479 9.17192C7.07812 9.25525 6.82812 9.25525 6.66146 9.08858L4.82812 7.25525C4.66146 7.08858 4.66146 6.75525 4.82812 6.58858C4.99479 6.42192 5.32812 6.42192 5.49479 6.58858L6.99479 8.00525L10.1615 4.25525C10.3281 4.08858 10.6615 4.08858 10.9115 4.25525Z" fill="#0066FF"/>
                    </svg>
                    <h5 className={'cursor-pointer'}>
                        Cookies
                    </h5>
                </div>
                <div className={'w-[95px] flex flex-row gap-[4px] hover:bg-white group h-[32px] cursor-pointer rounded-[500px] justify-center items-center hover:border-none     border-[#727272] border-[1px]'}>
                    <svg className={'fill-white group-hover:fill-black'} xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                        <path d="M8.15217 16.7188H8.00017C5.88512 16.6987 3.8641 15.8418 2.37916 14.3355C0.894214 12.8293 0.0662152 10.7962 0.0762623 8.68112C0.0863093 6.56599 0.933585 4.54092 2.43277 3.04884C3.93195 1.55676 5.96102 0.719116 8.07617 0.719116C10.1913 0.719116 12.2204 1.55676 13.7196 3.04884C15.2188 4.54092 16.066 6.56599 16.0761 8.68112C16.0861 10.7962 15.2581 12.8293 13.7732 14.3355C12.2882 15.8418 10.2672 16.6987 8.15217 16.7188ZM7.74217 2.51676C7.51617 2.78976 7.27917 3.22976 7.06517 3.83976C6.69617 4.89476 6.43917 6.33576 6.37817 7.96876H9.92517C9.86517 6.33576 9.60717 4.89476 9.23817 3.83976C9.02517 3.22976 8.78817 2.78976 8.56217 2.51676C8.36817 2.28176 8.23617 2.23176 8.17717 2.22076H8.13317C8.07817 2.22776 7.94317 2.27276 7.74217 2.51676ZM4.87717 7.96876C4.93917 6.19776 5.21717 4.58276 5.65017 3.34476C5.74917 3.06076 5.85817 2.79076 5.97917 2.53876C4.7985 2.92586 3.75334 3.64292 2.96724 4.60516C2.18115 5.5674 1.68699 6.73459 1.54317 7.96876H4.87717ZM1.54317 9.46875C1.68699 10.7029 2.18115 11.8701 2.96724 12.8324C3.75334 13.7946 4.7985 14.5116 5.97917 14.8988C5.85457 14.6363 5.74441 14.3672 5.64917 14.0928C5.21617 12.8548 4.93917 11.2398 4.87717 9.46875H1.54317ZM6.37817 9.46875C6.43917 11.1018 6.69617 12.5428 7.06517 13.5978C7.27917 14.2078 7.51617 14.6478 7.74217 14.9208C7.94417 15.1648 8.07817 15.2108 8.13317 15.2178L8.17717 15.2168C8.23717 15.2068 8.36717 15.1558 8.56217 14.9208C8.78817 14.6478 9.02517 14.2078 9.23817 13.5978C9.60817 12.5428 9.86417 11.1018 9.92517 9.46875H6.37817ZM11.4262 9.46875C11.3652 11.2398 11.0872 12.8548 10.6542 14.0928C10.5722 14.3278 10.4832 14.5528 10.3862 14.7668C11.4804 14.3343 12.4368 13.6132 13.1537 12.6803C13.8706 11.7473 14.3211 10.6374 14.4572 9.46875H11.4272H11.4262ZM14.4572 7.96876C14.321 6.80012 13.8705 5.69028 13.1536 4.75735C12.4367 3.82442 11.4803 3.1033 10.3862 2.67076C10.4832 2.88476 10.5722 3.11076 10.6542 3.34476C11.0872 4.58276 11.3652 6.19776 11.4262 7.96876H14.4572Z" fill={""}/>
                    </svg>
                    <h5 className={'text-white group-hover:text-black font-semibold text-[13px]'}>English</h5>
                </div>
            </div>
        </div>
          <div className={'w-full flex flex-col z-30  h-full overflow-auto pb-[50px]  bg1'}>
              <div className={'w-[1000px]  p-[12px] flex flex-row justify-between items-center text-white h-full bg-[#0F0F0F]'}>
                  <div className={'flex items-center gap-[10px] flex-row'}>
                      <div className={'flex flex-row gap-[20px]'}>
                          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.6">
                                  <rect y="0.5" width="32" height="32" rx="16" fill="black" fill-opacity="0.7"/>
                                  <g clip-path="url(#clip0_0_203)">
                                      <path d="M19.0299 8.96995C19.1704 9.11058 19.2493 9.3012 19.2493 9.49995C19.2493 9.6987 19.1704 9.88933 19.0299 10.03L12.5599 16.5L19.0299 22.97C19.1036 23.0386 19.1627 23.1214 19.2037 23.2134C19.2447 23.3054 19.2668 23.4047 19.2685 23.5054C19.2703 23.6061 19.2518 23.7062 19.2141 23.7995C19.1763 23.8929 19.1202 23.9778 19.049 24.049C18.9778 24.1202 18.8929 24.1764 18.7995 24.2141C18.7062 24.2518 18.6061 24.2703 18.5054 24.2685C18.4047 24.2668 18.3054 24.2447 18.2134 24.2037C18.1214 24.1627 18.0386 24.1036 17.9699 24.03L10.4399 16.5L17.9699 8.96995C18.1106 8.8295 18.3012 8.75061 18.4999 8.75061C18.6987 8.75061 18.8893 8.8295 19.0299 8.96995Z" fill="white"/>
                                  </g>
                              </g>
                              <defs>
                                  <clipPath id="clip0_0_203">
                                      <rect width="16" height="16" fill="white" transform="translate(8 8.5)"/>
                                  </clipPath>
                              </defs>
                          </svg>
                          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.6">
                                  <rect y="0.5" width="32" height="32" rx="16" fill="black" fill-opacity="0.7"/>
                                  <g clip-path="url(#clip0_0_207)">
                                      <path d="M12.9702 8.96995C12.8297 9.11058 12.7508 9.3012 12.7508 9.49995C12.7508 9.6987 12.8297 9.88933 12.9702 10.03L19.4402 16.5L12.9702 22.97C12.8965 23.0386 12.8374 23.1214 12.7964 23.2134C12.7554 23.3054 12.7333 23.4047 12.7316 23.5054C12.7298 23.6061 12.7483 23.7062 12.786 23.7995C12.8238 23.8929 12.8799 23.9778 12.9511 24.049C13.0223 24.1202 13.1072 24.1764 13.2006 24.2141C13.2939 24.2518 13.394 24.2703 13.4947 24.2685C13.5954 24.2668 13.6947 24.2447 13.7867 24.2037C13.8787 24.1627 13.9615 24.1036 14.0302 24.03L21.5602 16.5L14.0302 8.96995C13.8895 8.8295 13.6989 8.75061 13.5002 8.75061C13.3014 8.75061 13.1108 8.8295 12.9702 8.96995Z" fill="white"/>
                                  </g>
                              </g>
                              <defs>
                                  <clipPath id="clip0_0_207">
                                      <rect width="16" height="16" fill="white" transform="translate(8 8.5)"/>
                                  </clipPath>
                              </defs>
                          </svg>
                      </div>

                      <div className={'w-[364px] bg-white rounded-[500px] px-[12px] py-[8px] h-[40px] flex gap-[12px]'}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                              <path d="M10.533 1.27895C5.35298 1.27895 1.12598 5.41895 1.12598 10.558C1.12598 15.697 5.35198 19.837 10.533 19.837C12.767 19.837 14.823 19.067 16.44 17.779L20.793 22.132C20.8852 22.2275 20.9956 22.3036 21.1176 22.3561C21.2396 22.4085 21.3708 22.4361 21.5036 22.4372C21.6364 22.4384 21.768 22.4131 21.8909 22.3628C22.0138 22.3125 22.1255 22.2382 22.2194 22.1444C22.3133 22.0505 22.3875 21.9388 22.4378 21.8159C22.4881 21.693 22.5134 21.5613 22.5122 21.4286C22.5111 21.2958 22.4835 21.1646 22.4311 21.0425C22.3787 20.9205 22.3025 20.8102 22.207 20.718L17.863 16.374C19.2079 14.7343 19.942 12.6786 19.94 10.558C19.94 5.41795 15.714 1.27795 10.533 1.27795V1.27895ZM3.12598 10.558C3.12598 6.55195 6.42798 3.27795 10.533 3.27795C14.638 3.27795 17.94 6.55195 17.94 10.558C17.94 14.564 14.638 17.837 10.533 17.837C6.42798 17.837 3.12598 14.565 3.12598 10.558Z" fill="#121212"/>
                          </svg>
                          <input placeholder={'What do you want to listen to?'} className={'outline-none text-black h-full active:outline-none w-full'} type="text"/>
                      </div>

                  </div>
                  <div className={'flex flex-row items-center'}>
                      <div onClick={() => {setLogin({...login, type: 'signup'})}} className={`${login.type === 'signup' ? 'bg-white text-black' : 'text-[#text-[#A7A7A7]'} cursor-pointer transition-all duration-200  px-[32px] rounded-[500px] py-[15px]  h-fit`}>
                          <h4 className={' text-[15px]'}>
                              Sign up
                          </h4>
                      </div>
                      <div onClick={() => {setLogin({...login, type: 'login'})}} className={`${login.type === 'login' ? 'bg-white text-black' : 'text-[#text-[#A7A7A7]'} cursor-pointer transition-all duration-200  px-[32px] rounded-[500px] py-[15px]  h-fit`}>
                          <h4 className={' text-[15px]'}>
                              Log in
                          </h4>
                      </div>
                  </div>
              </div>
              <div className={'z-20 px-[32px] flex flex-col gap-[40px] pt-[78px]'}>
                  <div className={'flex flex-col'}>
                      <div className={'w-full text-[20px] justify-between flex'}>
                          <h5 className={'font-bold text-white'}>
                              Focus
                          </h5>
                          <h6 className={'text-[#B3B3B3]'}>
                              Show all
                          </h6>
                      </div>
                          <div className={'flex min-w-[1000px] flex-row mt-[22px] w-full gap-[24px]'}>
                          <div className={'w-[207px] transition-all duration-400  group p-[16px] cursor-pointer xl:hover:h-full  h-[298px] overflow-hidden bg-[#181818] rounded-[6px]'}>
                              <div className={'w-[175px] relative shadow1 h-[175px]'}>
                                  <Image src={main1} width={175} height={175} alt={''}/>
                                  <div className={'absolute group-hover:block hidden   bottom-1 right-3'}>
                                      <svg className={'shadow2 w-[45px] h-[45pxs]'} xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66" fill="none">
                                          <ellipse cx="34" cy="33" rx="34" ry="33" fill="#65D46E"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5428 32.1057L28.2242 20.2999C27.1375 19.7146 25.8926 19.7753 25.8926 21.8765V45.1235C25.8926 47.0444 27.2281 47.3472 28.2242 46.7002L46.5428 34.8944C47.2968 34.1239 47.2968 32.8761 46.5428 32.1057Z" fill="black"/>
                                      </svg>
                                  </div>
                              </div>
                              <div className={'flex flex-col gap-[5px] mt-4'}>
                                  <h5 className={'text-white font-bold '}>
                                      Peaceful Piano
                                  </h5>
                                  <h6 className={'text-[#A7A7A7]  text-[14px]'}>
                                      Relax and indulge with beautiful piano pieces
                                  </h6>
                              </div>
                          </div>
                          <div className={'w-[207px] transition-all duration-400  group p-[16px] cursor-pointer  h-[298px] overflow-hidden bg-[#181818] rounded-[6px]'}>
                              <div className={'w-[175px] relative shadow1 h-[175px]'}>
                                  <Image src={main2} width={175} height={175} alt={''}/>
                                  <div className={'absolute group-hover:block hidden   bottom-1 right-3'}>
                                      <svg className={'shadow2 w-[45px] h-[45pxs]'} xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66" fill="none">
                                          <ellipse cx="34" cy="33" rx="34" ry="33" fill="#65D46E"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5428 32.1057L28.2242 20.2999C27.1375 19.7146 25.8926 19.7753 25.8926 21.8765V45.1235C25.8926 47.0444 27.2281 47.3472 28.2242 46.7002L46.5428 34.8944C47.2968 34.1239 47.2968 32.8761 46.5428 32.1057Z" fill="black"/>
                                      </svg>
                                  </div>
                              </div>
                              <div className={'flex flex-col gap-[5px] mt-4'}>
                                  <h5 className={'text-white font-bold '}>
                                      Deep Focus
                                  </h5>
                                  <h6 className={'text-[#A7A7A7]  text-[14px]'}>
                                      Keep calm and focus with ambient
                                  </h6>
                              </div>
                          </div>
                          <div className={'w-[207px] transition-all duration-400  group p-[16px] cursor-pointer xl:hover:h-full  h-[298px] overflow-hidden bg-[#181818] rounded-[6px]'}>
                              <div className={'w-[175px] relative shadow1 h-[175px]'}>
                                  <Image src={main3} width={175} height={175} alt={''}/>
                                  <div className={'absolute group-hover:block hidden   bottom-1 right-3'}>
                                      <svg className={'shadow2 w-[45px] h-[45pxs]'} xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66" fill="none">
                                          <ellipse cx="34" cy="33" rx="34" ry="33" fill="#65D46E"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5428 32.1057L28.2242 20.2999C27.1375 19.7146 25.8926 19.7753 25.8926 21.8765V45.1235C25.8926 47.0444 27.2281 47.3472 28.2242 46.7002L46.5428 34.8944C47.2968 34.1239 47.2968 32.8761 46.5428 32.1057Z" fill="black"/>
                                      </svg>
                                  </div>
                              </div>
                              <div className={'flex flex-col gap-[5px] mt-4'}>
                                  <h5 className={'text-white font-bold '}>
                                      Instrumental Study
                                  </h5>
                                  <h6 className={'text-[#A7A7A7]  text-[14px]'}>
                                      Focus with soft study music in the background.
                                  </h6>
                              </div>
                          </div>
                          <div className={'w-[220px] transition-all duration-400  group p-[16px] cursor-pointer xl:hover:h-full  h-[298px] overflow-hidden bg-[#181818] rounded-[6px]'}>
                              <div className={'w-full flex justify-center items-center relative shadow1 h-[175px]'}>
                                  <Image src={main4} width={175} height={175} alt={''}/>
                                  <div className={'absolute group-hover:block hidden   bottom-1 right-3'}>
                                      <svg className={'shadow2 w-[45px] h-[45pxs]'} xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66" fill="none">
                                          <ellipse cx="34" cy="33" rx="34" ry="33" fill="#65D46E"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5428 32.1057L28.2242 20.2999C27.1375 19.7146 25.8926 19.7753 25.8926 21.8765V45.1235C25.8926 47.0444 27.2281 47.3472 28.2242 46.7002L46.5428 34.8944C47.2968 34.1239 47.2968 32.8761 46.5428 32.1057Z" fill="black"/>
                                      </svg>
                                  </div>
                              </div>
                              <div className={'flex flex-col gap-[5px] mt-4'}>
                                  <h5 className={'text-white font-bold '}>
                                      Jazz Vibes
                                  </h5>
                                  <h6 className={'text-[#A7A7A7]  text-[14px]'}>
                                      The original chill instrumental beats playlist.                              </h6>
                              </div>
                          </div>
                          <div className={'w-[207px] transition-all duration-400  group p-[16px] cursor-pointer xl:hover:h-full  h-[298px] overflow-hidden bg-[#181818] rounded-[6px]'}>
                              <div className={'w-[175px] relative shadow1 h-[175px]'}>
                                  <Image src={main5} width={175} height={175} alt={''}/>
                                  <div className={'absolute group-hover:block hidden   bottom-1 right-3'}>
                                      <svg className={'shadow2 w-[45px] h-[45pxs]'} xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66" fill="none">
                                          <ellipse cx="34" cy="33" rx="34" ry="33" fill="#65D46E"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5428 32.1057L28.2242 20.2999C27.1375 19.7146 25.8926 19.7753 25.8926 21.8765V45.1235C25.8926 47.0444 27.2281 47.3472 28.2242 46.7002L46.5428 34.8944C47.2968 34.1239 47.2968 32.8761 46.5428 32.1057Z" fill="black"/>
                                      </svg>
                                  </div>
                              </div>
                              <div className={'flex flex-col gap-[5px] mt-4'}>
                                  <h5 className={'text-white font-bold '}>
                                      Focus Flow
                                  </h5>
                                  <h6 className={'text-[#A7A7A7]  text-[14px]'}>
                                      Uptempo instrumental hip hop beats.                              </h6>
                              </div>
                          </div>

                      </div>
                  </div>
                  <div className={'flex flex-col'}>
                      <div className={'w-full text-[20px] justify-between flex'}>
                          <h5 className={'font-bold text-white'}>
                              Focus
                          </h5>
                          <h6 className={'text-[#B3B3B3]'}>
                              Show all
                          </h6>
                      </div>
                      <div className={'flex flex min-w-[1000px] flex-row mt-[22px] w-full gap-[24px]'}>
                          <div className={'w-[207px] transition-all duration-400  group p-[16px] cursor-pointer xl:hover:h-full  h-[298px] overflow-hidden bg-[#181818] rounded-[6px]'}>
                              <div className={'w-[175px] relative shadow1 h-[175px]'}>
                                  <Image src={main6} width={175} height={175} alt={''}/>
                                  <div className={'absolute group-hover:block hidden   bottom-1 right-3'}>
                                      <svg className={'shadow2 w-[45px] h-[45pxs]'} xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66" fill="none">
                                          <ellipse cx="34" cy="33" rx="34" ry="33" fill="#65D46E"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5428 32.1057L28.2242 20.2999C27.1375 19.7146 25.8926 19.7753 25.8926 21.8765V45.1235C25.8926 47.0444 27.2281 47.3472 28.2242 46.7002L46.5428 34.8944C47.2968 34.1239 47.2968 32.8761 46.5428 32.1057Z" fill="black"/>
                                      </svg>
                                  </div>
                              </div>
                              <div className={'flex flex-col gap-[5px] mt-4'}>
                                  <h5 className={'text-white font-bold '}>
                                      Today&apos;s Top Hits
                                  </h5>
                                  <h6 className={'text-[#A7A7A7]  text-[14px]'}>
                                      Ed Sheeran is on top of the Hottest 50!                                  </h6>
                              </div>
                          </div>
                          <div className={'w-[207px] transition-all duration-400  group p-[16px] cursor-pointer  h-[298px] overflow-hidden bg-[#181818] rounded-[6px]'}>
                              <div className={'w-[175px] relative shadow1 h-[175px]'}>
                                  <Image src={main7} width={175} height={175} alt={''}/>
                                  <div className={'absolute group-hover:block hidden   bottom-1 right-3'}>
                                      <svg className={'shadow2 w-[45px] h-[45pxs]'} xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66" fill="none">
                                          <ellipse cx="34" cy="33" rx="34" ry="33" fill="#65D46E"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5428 32.1057L28.2242 20.2999C27.1375 19.7146 25.8926 19.7753 25.8926 21.8765V45.1235C25.8926 47.0444 27.2281 47.3472 28.2242 46.7002L46.5428 34.8944C47.2968 34.1239 47.2968 32.8761 46.5428 32.1057Z" fill="black"/>
                                      </svg>
                                  </div>
                              </div>
                              <div className={'flex flex-col gap-[5px] mt-4'}>
                                  <h5 className={'text-white font-bold '}>
                                      RapCaviar
                                  </h5>
                                  <h6 className={'text-[#A7A7A7]  text-[14px]'}>
                                      New music from Roddy Ricch, Kodak Black, NLE Choppa and BIA.
                                  </h6>
                              </div>
                          </div>
                          <div className={'w-[207px] transition-all duration-400  group p-[16px] cursor-pointer xl:hover:h-full  h-[298px] overflow-hidden bg-[#181818] rounded-[6px]'}>
                              <div className={'w-[175px] relative shadow1 h-[175px]'}>
                                  <Image src={main8} width={175} height={175} alt={''}/>
                                  <div className={'absolute group-hover:block hidden   bottom-1 right-3'}>
                                      <svg className={'shadow2 w-[45px] h-[45pxs]'} xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66" fill="none">
                                          <ellipse cx="34" cy="33" rx="34" ry="33" fill="#65D46E"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5428 32.1057L28.2242 20.2999C27.1375 19.7146 25.8926 19.7753 25.8926 21.8765V45.1235C25.8926 47.0444 27.2281 47.3472 28.2242 46.7002L46.5428 34.8944C47.2968 34.1239 47.2968 32.8761 46.5428 32.1057Z" fill="black"/>
                                      </svg>
                                  </div>
                              </div>
                              <div className={'flex flex-col gap-[5px] mt-4'}>
                                  <h5 className={'text-white font-bold '}>
                                      All Out 2010s
                                  </h5>
                                  <h6 className={'text-[#A7A7A7]  text-[14px]'}>
                                      The biggest songs of the 2010s.
                                  </h6>
                              </div>
                          </div>
                          <div className={'w-[220px] transition-all duration-400  group p-[16px] cursor-pointer xl:hover:h-full  h-[298px] overflow-hidden bg-[#181818] rounded-[6px]'}>
                              <div className={'w-full flex justify-center items-center relative shadow1 h-[175px]'}>
                                  <Image src={main9} width={175} height={175} alt={''}/>
                                  <div className={'absolute group-hover:block hidden   bottom-1 right-3'}>
                                      <svg className={'shadow2 w-[45px] h-[45pxs]'} xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66" fill="none">
                                          <ellipse cx="34" cy="33" rx="34" ry="33" fill="#65D46E"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5428 32.1057L28.2242 20.2999C27.1375 19.7146 25.8926 19.7753 25.8926 21.8765V45.1235C25.8926 47.0444 27.2281 47.3472 28.2242 46.7002L46.5428 34.8944C47.2968 34.1239 47.2968 32.8761 46.5428 32.1057Z" fill="black"/>
                                      </svg>
                                  </div>
                              </div>
                              <div className={'flex flex-col gap-[5px] mt-4'}>
                                  <h5 className={'text-white font-bold '}>
                                      Rock Classics
                                  </h5>
                                  <h6 className={'text-[#A7A7A7]  text-[14px]'}>
                                      Rock legends & epic songs that continue to inspire generations.                         </h6>
                              </div>
                          </div>
                          <div className={'w-[207px] transition-all duration-400  group p-[16px] cursor-pointer xl:hover:h-full  h-[298px] overflow-hidden bg-[#181818] rounded-[6px]'}>
                              <div className={'w-[175px] relative shadow1 h-[175px]'}>
                                  <Image src={main10} width={175} height={175} alt={''}/>
                                  <div className={'absolute group-hover:block hidden   bottom-1 right-3'}>
                                      <svg className={'shadow2 w-[45px] h-[45pxs]'} xmlns="http://www.w3.org/2000/svg" width="68" height="66" viewBox="0 0 68 66" fill="none">
                                          <ellipse cx="34" cy="33" rx="34" ry="33" fill="#65D46E"/>
                                          <path fill-rule="evenodd" clip-rule="evenodd" d="M46.5428 32.1057L28.2242 20.2999C27.1375 19.7146 25.8926 19.7753 25.8926 21.8765V45.1235C25.8926 47.0444 27.2281 47.3472 28.2242 46.7002L46.5428 34.8944C47.2968 34.1239 47.2968 32.8761 46.5428 32.1057Z" fill="black"/>
                                      </svg>
                                  </div>
                              </div>
                              <div className={'flex flex-col gap-[5px] mt-4'}>
                                  <h5 className={'text-white font-bold '}>
                                      Chill Hits
                                  </h5>
                                  <h6 className={'text-[#A7A7A7]  text-[14px]'}>
                                      Kick back to the best new and recent chill hits.                          </h6>
                              </div>
                          </div>

                      </div>
                  </div>
              </div>
{/*
              <div className={'absolute bottom-0 w-full h-[50%] bg-[#1E1E1E]'}></div>
*/}
          </div>
      </div>
    </main>
  );
}
