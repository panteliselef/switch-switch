type Cb = (props: any) => void;

export interface LocomotiveScrollInterface {
    // Options
    el: any;
    name: string;
    offset: [number, number];
    repeat: boolean;
    smooth: boolean;
    smoothMobile: boolean;
    direction: 'vertical' | 'horizontal';
    getDirection: boolean;
    getSpeed: boolean;
    class: string;
    initClass: string;
    scrollingClass: string;
    draggingClass: string;
    smoothClass: string;
    scrollbarClass: string;
    multiplier: number;
    firefoxMultiplier: number;
    touchMultiplier: number;
    scrollFromAnyWhere: boolean;

    // Methods
    init: () => void;
    on: (eventName: string, func: Cb) => void;
    update: () => void;
    destroy: () => void;
    start: () => void;
    stop: () => void;
    scrollTo: (
        target: Node | string | number,
        options?: {
            offset?: number;
            duration?: number;
            easing?: [number, number, number, number];
            disableLerp?: boolean;
            callback?: () => void;
        },
    ) => void;
    // scrollTo: (
    //   target: Node | string | number,
    //   offset?: number,
    //   duration?: number,
    //   easing?: [number, number, number, number],
    //   disableLerp?: boolean,
    //   callback?: () => void,
    // ) => void
}

// Set a new property on the window object.
declare global {
    interface Window {
        locomotive: LocomotiveScrollInterface;
    }
}
