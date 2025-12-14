import '../common.dart';

void main() {
  final input = AoC.readInput();

  int accessibleRolls = 0;
  for (int r = 0; r < input.length; r++) {
    for (int c = 0; c < input[r].length; c++) {
      if (input[r][c] != '@') continue;
      final surroundingRollsCount =
          [
                [r - 1, c - 1],
                [r - 1, c],
                [r - 1, c + 1],

                [r, c - 1],
                [r, c + 1],

                [r + 1, c - 1],
                [r + 1, c],
                [r + 1, c + 1],
              ]
              .where((e) => (e[0] >= 0 && e[0] < input.length) && (e[1] >= 0 && e[1] < input[r].length))
              .map((e) => input[e[0]][e[1]] == '@')
              .fold(0, (prev, elem) => prev += elem ? 1 : 0);
      if (surroundingRollsCount < 4) accessibleRolls++;
    }
  }

  print(accessibleRolls);
}
