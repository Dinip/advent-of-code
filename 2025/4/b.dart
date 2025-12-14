import '../common.dart';

void main() {
  final input = AoC.readInput();
  int accessibleRolls = 0;
  List<String> refInput = [...input];
  List<String> mutatedInput = [...input];

  int iterationCount = 0;

  do {
    iterationCount = 0;

    for (int r = 0; r < refInput.length; r++) {
      for (int c = 0; c < refInput[r].length; c++) {
        if (refInput[r][c] != '@') continue;
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
                .where((e) => (e[0] >= 0 && e[0] < refInput.length) && (e[1] >= 0 && e[1] < refInput[r].length))
                .map((e) => refInput[e[0]][e[1]] == '@')
                .fold(0, (prev, elem) => prev += elem ? 1 : 0);
        if (surroundingRollsCount < 4) {
          iterationCount++;
          final splitRow = mutatedInput[r].split('');
          splitRow[c] = 'x';
          mutatedInput[r] = splitRow.join('');
        }
      }
    }

    refInput = [...mutatedInput];
    accessibleRolls += iterationCount;
    print("iteration: $iterationCount");
  } while (iterationCount != 0);

  print(accessibleRolls);
}
