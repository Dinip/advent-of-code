import 'dart:io';

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
