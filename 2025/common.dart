import 'dart:io';
import 'dart:math' as math;

class AoC {
  static List<String> _readAndSplitFile(String path, {String extraSplit = '\n'}) {
    final file = File(path);
    final input = file.readAsStringSync();
    return input.split(extraSplit);
  }

  static List<String> readExample1({String split = '\n'}) => _readAndSplitFile('example.txt', extraSplit: split);

  static List<String> readExample2({String split = '\n'}) => _readAndSplitFile('example2.txt', extraSplit: split);

  static List<String> readInput({String split = '\n'}) => _readAndSplitFile('input.txt', extraSplit: split);
}

extension IterableIndexed<E> on Iterable<E> {
  Iterable<T> maxIndexed<T>(T Function(int index, E element) f) sync* {
    int idx = 0;
    for (final elem in this) {
      yield f(idx++, elem);
    }
  }
}

extension IterableMathOperations on Iterable<int> {
  int max() => this.reduce((value, element) => math.max(value, element));

  int sum() => this.reduce((value, element) => value + element);
}
