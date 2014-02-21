
/**
 * Draw circle on canvas.
 *
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} node
 * @api public
 */

module.exports = function(ctx, node){
  ctx.beginPath();
  ctx.arc(node.x, node.y, node.radius, 0, 2 * Math.PI);
  ctx.closePath();

  if (node.fill) {
    ctx.fillStyle = node.fill.style;
    ctx.fill();
  }

  if (node.stroke) {
    ctx.strokeStyle = node.stroke.style;
    ctx.lineWidth = node.stroke.width;
    ctx.stroke();
  }
};