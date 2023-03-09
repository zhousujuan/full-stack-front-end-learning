
在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

 

示例 1:

输入: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
输出: 12
解释: 路径 1→3→5→2→1 可以拿到最多价值的礼物
 

提示：

0 < grid.length <= 200
0 < grid[0].length <= 200

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/li-wu-de-zui-da-jie-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



var maxValue = function(grid) {
    const m = grid.length, n = grid[0].length;
    const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i > 0) {
                f[i][j] = Math.max(f[i][j], f[i - 1][j]);
            }
            if (j > 0) {
                f[i][j] = Math.max(f[i][j], f[i][j - 1]);
            }
            f[i][j] += grid[i][j];
        }
    }
    return f[m - 1][n - 1];
};



//找时间看看我的代码的出问题的点，在呢个地方

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function(grid) {
    
    let row = grid[0].length;
    let col = grid.length;
    let tmp = grid[0][0] + grid[row - 1][col - 1]

    let row_ = 0;
    let col_ = 0;
    let bottom = 0;
    let right = 0;

    for(let i = 0; i < row; i ++) {
        for(let j = 0; j < col; j ++) {
            // if( (row_ == i && col_ + 1 == j ) || (row_ + 1 == i && col_ == j)) {

                if(row_ == i && col_ + 1 == j ) {
                    bottom = grid[i][j];
                }

                if(row_ + 1 == i && col_ == j) {
                    right = grid[i][j];
                }

                if(right > bottom) {
                    row_ = i;
                    tmp += right;
                } else {
                    col_ = j;
                    tmp += bottom;
                }
            // }
        }
    }

    return tmp;
};