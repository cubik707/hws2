import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: '160px',
                color: '#00CC22',
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-thumb': {
                    width: 20,
                    height: 20,
                    border: '1px solid #00CC22',
                    backgroundColor: '#fff',
                    '&:before': {
                        content: '""',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#00CC22',
                        zIndex: -1,
                    },
                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                        boxShadow: 'none',
                    },
                },
            }}
            // sx={{ // стили для слайдера // пишет студент
            //     // Стили для общей полосы
            //     margin: '0 13px',
            //     width: '147px',
            //     '& .MuiSlider-track': {
            //         backgroundColor: '#00CC22',
            //         height: 4,
            //         border: 0,
            //     },
            //     // Стили для неактивной полосы
            //     '& .MuiSlider-rail': {
            //         backgroundColor: '#8B8B8B',
            //         height: 4,
            //     },
            //     // Стили для ползунка
            //     '& .MuiSlider-thumb': {
            //         height: 20,
            //         width: 20,
            //         backgroundColor: '#fff',
            //         border: '1px solid #00CC22',
            //         '&:focus, &:hover, &.Mui-active': {
            //             boxShadow: '0px 0px 3px 1px rgba(0, 0, 0, 0.1)',
            //         },
            //         '&:before': {
            //             content: '""', // важно для отображения псевдоэлемента
            //             position: 'absolute',
            //             left: '50%',
            //             top: '50%',
            //             transform: 'translate(-50%, -50%)',
            //             width: 6,
            //             height: 6,
            //             backgroundColor: '#00CC22', // цвет зеленого кружка
            //             borderRadius: '50%', // делает кружок круглым
            //             boxShadow:
            //                 '0px 0px 1px 0px rgba(0,0,0,0), 0px 0px 0px 0px rgba(0,0,0,0), 0px 0px 1px 0px rgba(0,0,0,0)',
            //         },
            //     },
            // }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
