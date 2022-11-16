input.onPinPressed(TouchPin.P0, function () {
	
})
input.onPinPressed(TouchPin.P2, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
})
input.onPinPressed(TouchPin.P1, function () {
    if (input.pinIsPressed(TouchPin.P0) && input.pinIsPressed(TouchPin.P1)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
