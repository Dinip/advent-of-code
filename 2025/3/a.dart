import '../common.dart';

void main() {
  // back to spaghetti "1 liners" :) (that are not that much 1 liners, because format at 120 cols")
  print(
    AoC.readInput()
        .map(
          (bank) => bank
              .split('')
              .maxIndexed(
                (batIdx, bat) => bank
                    .split('')
                    .maxIndexed((bat2Idx, bat2) => int.parse(bat2Idx > batIdx ? '${bat}${bat2}' : '0'))
                    .max(),
              )
              .max(),
        )
        .sum(),
  );
}
