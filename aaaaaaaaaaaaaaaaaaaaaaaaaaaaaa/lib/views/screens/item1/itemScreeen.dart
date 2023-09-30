import 'package:acounting_max/views/screens/item1/widgets/appBar.dart';
import 'package:acounting_max/views/screens/item1/widgets/itemdropdown.dart';
import 'package:acounting_max/views/screens/item1/widgets/itemform.dart';
import 'package:acounting_max/views/screens/item1/widgets/uploadImg.dart';
import 'package:flutter/material.dart';
import 'package:flutter/src/widgets/container.dart';
import 'package:flutter/src/widgets/framework.dart';

class itemScreenWidget extends StatefulWidget {
  const itemScreenWidget({super.key});

  @override
  State<itemScreenWidget> createState() => _itemScreenWidgetState();
}

class _itemScreenWidgetState extends State<itemScreenWidget> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: PreferredSize(
            preferredSize: Size.fromHeight(65),
            child: const AppBarwidgets()), // this is the app bar
        body: Column(
          children: [
            //this container is upload image
            Container(
              color: Color.fromARGB(255, 255, 255, 255),
              child: const UloadImgWidget(),
            ),
            //this container is item form
          Container(
            child: const itemFormWidget()
          ),
          Container(
            child: const itemDropdown()
          )
          ],
        ));
  }
}
