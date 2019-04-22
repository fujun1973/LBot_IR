// Auto-generated. Do not edit.



    //% color=50 weight=19
    //% icon="\uf1eb"
declare namespace lbot_IR {

    /**
     * button pushed.
     */
    //% blockId=ir_received_left_event
    //% block="当 |%btn| 按钮被按下" shim=lbot_IR::onPressEvent
    function onPressEvent(btn: RemoteButton, body: () => void): void;

    /**
     * initialises local variablesssss
     */
    //% blockId=ir_init
    //% block="连接红外接收 到引脚 %pin" shim=lbot_IR::init
    function init(pin: Pins): void;
}

// Auto-generated. Do not edit. Really.
