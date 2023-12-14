export function drawStatusText(ctx, input, player){
    ctx.font = '50px Helvatica';
    ctx.fillText('last input: ' + input.lastkey,10, 80)
    ctx.fillText('Active State: '+player.currentState.state, 20, 160)
}