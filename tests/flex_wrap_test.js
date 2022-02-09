import { assert } from "./deps.ts";
import * as Yoga from "../mod.ts";

Deno.test("wrap_column", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(30);
    root_child0.setHeight(30);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(30);
    root_child1.setHeight(30);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(30);
    root_child2.setHeight(30);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(30);
    root_child3.setHeight(30);
    root.insertChild(root_child3, 3);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(60 === root.getComputedWidth(), "60 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      30 === root_child0.getComputedHeight(),
      "30 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      30 === root_child1.getComputedTop(),
      "30 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      30 === root_child1.getComputedHeight(),
      "30 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      60 === root_child2.getComputedTop(),
      "60 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      30 === root_child3.getComputedLeft(),
      "30 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      0 === root_child3.getComputedTop(),
      "0 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      30 === root_child3.getComputedHeight(),
      "30 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(60 === root.getComputedWidth(), "60 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      30 === root_child0.getComputedLeft(),
      "30 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      30 === root_child0.getComputedHeight(),
      "30 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      30 === root_child1.getComputedLeft(),
      "30 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      30 === root_child1.getComputedTop(),
      "30 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      30 === root_child1.getComputedHeight(),
      "30 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      30 === root_child2.getComputedLeft(),
      "30 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      60 === root_child2.getComputedTop(),
      "60 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      0 === root_child3.getComputedTop(),
      "0 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      30 === root_child3.getComputedHeight(),
      "30 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrap_row", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(30);
    root_child0.setHeight(30);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(30);
    root_child1.setHeight(30);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(30);
    root_child2.setHeight(30);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(30);
    root_child3.setHeight(30);
    root.insertChild(root_child3, 3);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(60 === root.getComputedHeight(), "60 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      30 === root_child0.getComputedHeight(),
      "30 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      30 === root_child1.getComputedLeft(),
      "30 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      30 === root_child1.getComputedHeight(),
      "30 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      60 === root_child2.getComputedLeft(),
      "60 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      30 === root_child3.getComputedTop(),
      "30 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      30 === root_child3.getComputedHeight(),
      "30 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(60 === root.getComputedHeight(), "60 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      70 === root_child0.getComputedLeft(),
      "70 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      30 === root_child0.getComputedHeight(),
      "30 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      40 === root_child1.getComputedLeft(),
      "40 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      30 === root_child1.getComputedHeight(),
      "30 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      10 === root_child2.getComputedLeft(),
      "10 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      70 === root_child3.getComputedLeft(),
      "70 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      30 === root_child3.getComputedTop(),
      "30 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      30 === root_child3.getComputedHeight(),
      "30 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrap_row_align_items_flex_end", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_FLEX_END);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(30);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(30);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(30);
    root_child2.setHeight(30);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(30);
    root_child3.setHeight(30);
    root.insertChild(root_child3, 3);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(60 === root.getComputedHeight(), "60 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      20 === root_child0.getComputedTop(),
      "20 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      30 === root_child1.getComputedLeft(),
      "30 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      10 === root_child1.getComputedTop(),
      "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      60 === root_child2.getComputedLeft(),
      "60 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      30 === root_child3.getComputedTop(),
      "30 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      30 === root_child3.getComputedHeight(),
      "30 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(60 === root.getComputedHeight(), "60 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      70 === root_child0.getComputedLeft(),
      "70 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      20 === root_child0.getComputedTop(),
      "20 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      40 === root_child1.getComputedLeft(),
      "40 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      10 === root_child1.getComputedTop(),
      "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      10 === root_child2.getComputedLeft(),
      "10 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      70 === root_child3.getComputedLeft(),
      "70 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      30 === root_child3.getComputedTop(),
      "30 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      30 === root_child3.getComputedHeight(),
      "30 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrap_row_align_items_center", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(30);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(30);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(30);
    root_child2.setHeight(30);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(30);
    root_child3.setHeight(30);
    root.insertChild(root_child3, 3);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(60 === root.getComputedHeight(), "60 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      30 === root_child1.getComputedLeft(),
      "30 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      5 === root_child1.getComputedTop(),
      "5 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      60 === root_child2.getComputedLeft(),
      "60 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      30 === root_child3.getComputedTop(),
      "30 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      30 === root_child3.getComputedHeight(),
      "30 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(60 === root.getComputedHeight(), "60 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      70 === root_child0.getComputedLeft(),
      "70 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      40 === root_child1.getComputedLeft(),
      "40 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      5 === root_child1.getComputedTop(),
      "5 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      10 === root_child2.getComputedLeft(),
      "10 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      70 === root_child3.getComputedLeft(),
      "70 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      30 === root_child3.getComputedTop(),
      "30 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      30 === root_child3.getComputedHeight(),
      "30 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("flex_wrap_children_with_min_main_overriding_flex_basis", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexBasis(50);
    root_child0.setMinWidth(55);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexBasis(50);
    root_child1.setMinWidth(55);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      55 === root_child0.getComputedWidth(),
      "55 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      55 === root_child1.getComputedWidth(),
      "55 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      45 === root_child0.getComputedLeft(),
      "45 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      55 === root_child0.getComputedWidth(),
      "55 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      45 === root_child1.getComputedLeft(),
      "45 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      55 === root_child1.getComputedWidth(),
      "55 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("flex_wrap_wrap_to_child_height", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0.setAlignItems(Yoga.ALIGN_FLEX_START);
    root_child0.setFlexWrap(Yoga.WRAP_WRAP);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setWidth(100);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0.setWidth(100);
    root_child0_child0_child0.setHeight(100);
    root_child0_child0.insertChild(root_child0_child0_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(100);
    root_child1.setHeight(100);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0_child0.getComputedWidth(),
      "100 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0.getComputedHeight(),
      "100 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0_child0.getComputedLeft(),
      "0 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedTop(),
      "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0_child0_child0.getComputedWidth(),
      "100 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0_child0.getComputedHeight(),
      "100 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      100 === root_child1.getComputedTop(),
      "100 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0_child0.getComputedWidth(),
      "100 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0.getComputedHeight(),
      "100 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0_child0.getComputedLeft(),
      "0 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedTop(),
      "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0_child0_child0.getComputedWidth(),
      "100 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0_child0.getComputedHeight(),
      "100 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      100 === root_child1.getComputedTop(),
      "100 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      100 === root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      100 === root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("flex_wrap_align_stretch_fits_one_row", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(150);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root.insertChild(root_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      0 === root_child1.getComputedHeight(),
      "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(150 === root.getComputedWidth(), "150 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      100 === root_child0.getComputedLeft(),
      "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      0 === root_child1.getComputedHeight(),
      "0 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrap_reverse_row_align_content_flex_start", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setFlexWrap(Yoga.WRAP_WRAP_REVERSE);
    root.setWidth(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(30);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(30);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(30);
    root_child2.setHeight(30);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(30);
    root_child3.setHeight(40);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(30);
    root_child4.setHeight(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(80 === root.getComputedHeight(), "80 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      70 === root_child0.getComputedTop(),
      "70 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      30 === root_child1.getComputedLeft(),
      "30 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      60 === root_child1.getComputedTop(),
      "60 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      60 === root_child2.getComputedLeft(),
      "60 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      50 === root_child2.getComputedTop(),
      "50 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      30 === root_child4.getComputedLeft(),
      "30 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      30 === root_child4.getComputedWidth(),
      "30 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(80 === root.getComputedHeight(), "80 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      70 === root_child0.getComputedLeft(),
      "70 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      70 === root_child0.getComputedTop(),
      "70 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      40 === root_child1.getComputedLeft(),
      "40 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      60 === root_child1.getComputedTop(),
      "60 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      10 === root_child2.getComputedLeft(),
      "10 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      50 === root_child2.getComputedTop(),
      "50 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      70 === root_child3.getComputedLeft(),
      "70 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      40 === root_child4.getComputedLeft(),
      "40 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      30 === root_child4.getComputedWidth(),
      "30 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrap_reverse_row_align_content_center", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_CENTER);
    root.setFlexWrap(Yoga.WRAP_WRAP_REVERSE);
    root.setWidth(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(30);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(30);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(30);
    root_child2.setHeight(30);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(30);
    root_child3.setHeight(40);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(30);
    root_child4.setHeight(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(80 === root.getComputedHeight(), "80 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      70 === root_child0.getComputedTop(),
      "70 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      30 === root_child1.getComputedLeft(),
      "30 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      60 === root_child1.getComputedTop(),
      "60 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      60 === root_child2.getComputedLeft(),
      "60 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      50 === root_child2.getComputedTop(),
      "50 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      30 === root_child4.getComputedLeft(),
      "30 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      30 === root_child4.getComputedWidth(),
      "30 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(80 === root.getComputedHeight(), "80 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      70 === root_child0.getComputedLeft(),
      "70 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      70 === root_child0.getComputedTop(),
      "70 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      40 === root_child1.getComputedLeft(),
      "40 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      60 === root_child1.getComputedTop(),
      "60 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      10 === root_child2.getComputedLeft(),
      "10 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      50 === root_child2.getComputedTop(),
      "50 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      70 === root_child3.getComputedLeft(),
      "70 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      40 === root_child4.getComputedLeft(),
      "40 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      30 === root_child4.getComputedWidth(),
      "30 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrap_reverse_row_single_line_different_size", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setFlexWrap(Yoga.WRAP_WRAP_REVERSE);
    root.setWidth(300);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(30);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(30);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(30);
    root_child2.setHeight(30);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(30);
    root_child3.setHeight(40);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(30);
    root_child4.setHeight(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(300 === root.getComputedWidth(), "300 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(50 === root.getComputedHeight(), "50 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      40 === root_child0.getComputedTop(),
      "40 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      30 === root_child1.getComputedLeft(),
      "30 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      30 === root_child1.getComputedTop(),
      "30 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      60 === root_child2.getComputedLeft(),
      "60 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      20 === root_child2.getComputedTop(),
      "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      90 === root_child3.getComputedLeft(),
      "90 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      120 === root_child4.getComputedLeft(),
      "120 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      30 === root_child4.getComputedWidth(),
      "30 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(300 === root.getComputedWidth(), "300 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(50 === root.getComputedHeight(), "50 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      270 === root_child0.getComputedLeft(),
      "270 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      40 === root_child0.getComputedTop(),
      "40 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      240 === root_child1.getComputedLeft(),
      "240 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      30 === root_child1.getComputedTop(),
      "30 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      210 === root_child2.getComputedLeft(),
      "210 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      20 === root_child2.getComputedTop(),
      "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      180 === root_child3.getComputedLeft(),
      "180 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      150 === root_child4.getComputedLeft(),
      "150 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      30 === root_child4.getComputedWidth(),
      "30 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrap_reverse_row_align_content_stretch", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setFlexWrap(Yoga.WRAP_WRAP_REVERSE);
    root.setWidth(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(30);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(30);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(30);
    root_child2.setHeight(30);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(30);
    root_child3.setHeight(40);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(30);
    root_child4.setHeight(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(80 === root.getComputedHeight(), "80 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      70 === root_child0.getComputedTop(),
      "70 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      30 === root_child1.getComputedLeft(),
      "30 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      60 === root_child1.getComputedTop(),
      "60 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      60 === root_child2.getComputedLeft(),
      "60 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      50 === root_child2.getComputedTop(),
      "50 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      30 === root_child4.getComputedLeft(),
      "30 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      30 === root_child4.getComputedWidth(),
      "30 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(80 === root.getComputedHeight(), "80 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      70 === root_child0.getComputedLeft(),
      "70 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      70 === root_child0.getComputedTop(),
      "70 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      40 === root_child1.getComputedLeft(),
      "40 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      60 === root_child1.getComputedTop(),
      "60 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      10 === root_child2.getComputedLeft(),
      "10 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      50 === root_child2.getComputedTop(),
      "50 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      70 === root_child3.getComputedLeft(),
      "70 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      40 === root_child4.getComputedLeft(),
      "40 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      30 === root_child4.getComputedWidth(),
      "30 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrap_reverse_row_align_content_space_around", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignContent(Yoga.ALIGN_SPACE_AROUND);
    root.setFlexWrap(Yoga.WRAP_WRAP_REVERSE);
    root.setWidth(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(30);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(30);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(30);
    root_child2.setHeight(30);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(30);
    root_child3.setHeight(40);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(30);
    root_child4.setHeight(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(80 === root.getComputedHeight(), "80 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      70 === root_child0.getComputedTop(),
      "70 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      30 === root_child1.getComputedLeft(),
      "30 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      60 === root_child1.getComputedTop(),
      "60 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      60 === root_child2.getComputedLeft(),
      "60 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      50 === root_child2.getComputedTop(),
      "50 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      30 === root_child4.getComputedLeft(),
      "30 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      30 === root_child4.getComputedWidth(),
      "30 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(80 === root.getComputedHeight(), "80 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      70 === root_child0.getComputedLeft(),
      "70 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      70 === root_child0.getComputedTop(),
      "70 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      40 === root_child1.getComputedLeft(),
      "40 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      60 === root_child1.getComputedTop(),
      "60 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      10 === root_child2.getComputedLeft(),
      "10 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      50 === root_child2.getComputedTop(),
      "50 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      70 === root_child3.getComputedLeft(),
      "70 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      10 === root_child3.getComputedTop(),
      "10 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      40 === root_child4.getComputedLeft(),
      "40 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      30 === root_child4.getComputedWidth(),
      "30 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrap_reverse_column_fixed_size", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setFlexWrap(Yoga.WRAP_WRAP_REVERSE);
    root.setWidth(200);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(30);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(30);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(30);
    root_child2.setHeight(30);
    root.insertChild(root_child2, 2);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(30);
    root_child3.setHeight(40);
    root.insertChild(root_child3, 3);

    var root_child4 = Yoga.Node.create(config);
    root_child4.setWidth(30);
    root_child4.setHeight(50);
    root.insertChild(root_child4, 4);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      170 === root_child0.getComputedLeft(),
      "170 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      170 === root_child1.getComputedLeft(),
      "170 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      10 === root_child1.getComputedTop(),
      "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      170 === root_child2.getComputedLeft(),
      "170 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      30 === root_child2.getComputedTop(),
      "30 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      170 === root_child3.getComputedLeft(),
      "170 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      60 === root_child3.getComputedTop(),
      "60 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      140 === root_child4.getComputedLeft(),
      "140 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      30 === root_child4.getComputedWidth(),
      "30 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      30 === root_child0.getComputedWidth(),
      "30 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      10 === root_child1.getComputedTop(),
      "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      30 === root_child2.getComputedTop(),
      "30 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      30 === root_child2.getComputedWidth(),
      "30 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      30 === root_child2.getComputedHeight(),
      "30 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      60 === root_child3.getComputedTop(),
      "60 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      30 === root_child3.getComputedWidth(),
      "30 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      40 === root_child3.getComputedHeight(),
      "40 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    assert(
      30 === root_child4.getComputedLeft(),
      "30 === root_child4.getComputedLeft() (" + root_child4.getComputedLeft() + ")",
    );
    assert(
      0 === root_child4.getComputedTop(),
      "0 === root_child4.getComputedTop() (" + root_child4.getComputedTop() + ")",
    );
    assert(
      30 === root_child4.getComputedWidth(),
      "30 === root_child4.getComputedWidth() (" + root_child4.getComputedWidth() + ")",
    );
    assert(
      50 === root_child4.getComputedHeight(),
      "50 === root_child4.getComputedHeight() (" + root_child4.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrapped_row_within_align_items_center", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0.setFlexWrap(Yoga.WRAP_WRAP);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setWidth(150);
    root_child0_child0.setHeight(80);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child1 = Yoga.Node.create(config);
    root_child0_child1.setWidth(80);
    root_child0_child1.setHeight(80);
    root_child0.insertChild(root_child0_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      160 === root_child0.getComputedHeight(),
      "160 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      150 === root_child0_child0.getComputedWidth(),
      "150 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0_child0.getComputedHeight(),
      "80 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child1.getComputedLeft(),
      "0 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedTop(),
      "80 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedWidth(),
      "80 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedHeight(),
      "80 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      160 === root_child0.getComputedHeight(),
      "160 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child0_child0.getComputedLeft(),
      "50 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      150 === root_child0_child0.getComputedWidth(),
      "150 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0_child0.getComputedHeight(),
      "80 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      120 === root_child0_child1.getComputedLeft(),
      "120 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedTop(),
      "80 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedWidth(),
      "80 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedHeight(),
      "80 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrapped_row_within_align_items_flex_start", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_FLEX_START);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0.setFlexWrap(Yoga.WRAP_WRAP);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setWidth(150);
    root_child0_child0.setHeight(80);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child1 = Yoga.Node.create(config);
    root_child0_child1.setWidth(80);
    root_child0_child1.setHeight(80);
    root_child0.insertChild(root_child0_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      160 === root_child0.getComputedHeight(),
      "160 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      150 === root_child0_child0.getComputedWidth(),
      "150 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0_child0.getComputedHeight(),
      "80 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child1.getComputedLeft(),
      "0 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedTop(),
      "80 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedWidth(),
      "80 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedHeight(),
      "80 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      160 === root_child0.getComputedHeight(),
      "160 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child0_child0.getComputedLeft(),
      "50 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      150 === root_child0_child0.getComputedWidth(),
      "150 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0_child0.getComputedHeight(),
      "80 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      120 === root_child0_child1.getComputedLeft(),
      "120 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedTop(),
      "80 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedWidth(),
      "80 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedHeight(),
      "80 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrapped_row_within_align_items_flex_end", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_FLEX_END);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0.setFlexWrap(Yoga.WRAP_WRAP);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setWidth(150);
    root_child0_child0.setHeight(80);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child1 = Yoga.Node.create(config);
    root_child0_child1.setWidth(80);
    root_child0_child1.setHeight(80);
    root_child0.insertChild(root_child0_child1, 1);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      160 === root_child0.getComputedHeight(),
      "160 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      150 === root_child0_child0.getComputedWidth(),
      "150 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0_child0.getComputedHeight(),
      "80 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child1.getComputedLeft(),
      "0 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedTop(),
      "80 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedWidth(),
      "80 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedHeight(),
      "80 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      200 === root_child0.getComputedWidth(),
      "200 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      160 === root_child0.getComputedHeight(),
      "160 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child0_child0.getComputedLeft(),
      "50 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      150 === root_child0_child0.getComputedWidth(),
      "150 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0_child0.getComputedHeight(),
      "80 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      120 === root_child0_child1.getComputedLeft(),
      "120 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedTop(),
      "80 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedWidth(),
      "80 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0_child1.getComputedHeight(),
      "80 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrapped_column_max_height", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignContent(Yoga.ALIGN_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(700);
    root.setHeight(500);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(100);
    root_child0.setHeight(500);
    root_child0.setMaxHeight(200);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setMargin(Yoga.EDGE_LEFT, 20);
    root_child1.setMargin(Yoga.EDGE_TOP, 20);
    root_child1.setMargin(Yoga.EDGE_RIGHT, 20);
    root_child1.setMargin(Yoga.EDGE_BOTTOM, 20);
    root_child1.setWidth(200);
    root_child1.setHeight(200);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(100);
    root_child2.setHeight(100);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(700 === root.getComputedWidth(), "700 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(500 === root.getComputedHeight(), "500 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      250 === root_child0.getComputedLeft(),
      "250 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      30 === root_child0.getComputedTop(),
      "30 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      200 === root_child0.getComputedHeight(),
      "200 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      200 === root_child1.getComputedLeft(),
      "200 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      250 === root_child1.getComputedTop(),
      "250 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      200 === root_child1.getComputedHeight(),
      "200 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      420 === root_child2.getComputedLeft(),
      "420 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      200 === root_child2.getComputedTop(),
      "200 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(700 === root.getComputedWidth(), "700 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(500 === root.getComputedHeight(), "500 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      350 === root_child0.getComputedLeft(),
      "350 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      30 === root_child0.getComputedTop(),
      "30 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      200 === root_child0.getComputedHeight(),
      "200 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      300 === root_child1.getComputedLeft(),
      "300 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      250 === root_child1.getComputedTop(),
      "250 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      200 === root_child1.getComputedHeight(),
      "200 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      180 === root_child2.getComputedLeft(),
      "180 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      200 === root_child2.getComputedTop(),
      "200 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrapped_column_max_height_flex", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignContent(Yoga.ALIGN_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(700);
    root.setHeight(500);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setFlexShrink(1);
    root_child0.setFlexBasis("0%");
    root_child0.setWidth(100);
    root_child0.setHeight(500);
    root_child0.setMaxHeight(200);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexGrow(1);
    root_child1.setFlexShrink(1);
    root_child1.setFlexBasis("0%");
    root_child1.setMargin(Yoga.EDGE_LEFT, 20);
    root_child1.setMargin(Yoga.EDGE_TOP, 20);
    root_child1.setMargin(Yoga.EDGE_RIGHT, 20);
    root_child1.setMargin(Yoga.EDGE_BOTTOM, 20);
    root_child1.setWidth(200);
    root_child1.setHeight(200);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(100);
    root_child2.setHeight(100);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(700 === root.getComputedWidth(), "700 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(500 === root.getComputedHeight(), "500 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      300 === root_child0.getComputedLeft(),
      "300 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      180 === root_child0.getComputedHeight(),
      "180 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      250 === root_child1.getComputedLeft(),
      "250 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      200 === root_child1.getComputedTop(),
      "200 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      180 === root_child1.getComputedHeight(),
      "180 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      300 === root_child2.getComputedLeft(),
      "300 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      400 === root_child2.getComputedTop(),
      "400 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(700 === root.getComputedWidth(), "700 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(500 === root.getComputedHeight(), "500 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      300 === root_child0.getComputedLeft(),
      "300 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      180 === root_child0.getComputedHeight(),
      "180 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      250 === root_child1.getComputedLeft(),
      "250 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      200 === root_child1.getComputedTop(),
      "200 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      200 === root_child1.getComputedWidth(),
      "200 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      180 === root_child1.getComputedHeight(),
      "180 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      300 === root_child2.getComputedLeft(),
      "300 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      400 === root_child2.getComputedTop(),
      "400 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      100 === root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      100 === root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrap_nodes_with_content_sizing_overflowing_margin", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(500);
    root.setHeight(500);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0.setFlexWrap(Yoga.WRAP_WRAP);
    root_child0.setWidth(85);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0.setWidth(40);
    root_child0_child0_child0.setHeight(40);
    root_child0_child0.insertChild(root_child0_child0_child0, 0);

    var root_child0_child1 = Yoga.Node.create(config);
    root_child0_child1.setMargin(Yoga.EDGE_RIGHT, 10);
    root_child0.insertChild(root_child0_child1, 1);

    var root_child0_child1_child0 = Yoga.Node.create(config);
    root_child0_child1_child0.setWidth(40);
    root_child0_child1_child0.setHeight(40);
    root_child0_child1.insertChild(root_child0_child1_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(500 === root.getComputedWidth(), "500 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(500 === root.getComputedHeight(), "500 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      85 === root_child0.getComputedWidth(),
      "85 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0.getComputedHeight(),
      "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child0.getComputedWidth(),
      "40 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child0.getComputedHeight(),
      "40 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0_child0.getComputedLeft(),
      "0 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedTop(),
      "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child0_child0.getComputedWidth(),
      "40 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child0_child0.getComputedHeight(),
      "40 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child1.getComputedLeft(),
      "0 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child0_child1.getComputedTop(),
      "40 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child1.getComputedWidth(),
      "40 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child1.getComputedHeight(),
      "40 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child1_child0.getComputedLeft(),
      "0 === root_child0_child1_child0.getComputedLeft() (" + root_child0_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child1_child0.getComputedTop(),
      "0 === root_child0_child1_child0.getComputedTop() (" + root_child0_child1_child0.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child1_child0.getComputedWidth(),
      "40 === root_child0_child1_child0.getComputedWidth() (" + root_child0_child1_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child1_child0.getComputedHeight(),
      "40 === root_child0_child1_child0.getComputedHeight() (" + root_child0_child1_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(500 === root.getComputedWidth(), "500 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(500 === root.getComputedHeight(), "500 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      415 === root_child0.getComputedLeft(),
      "415 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      85 === root_child0.getComputedWidth(),
      "85 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      80 === root_child0.getComputedHeight(),
      "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      45 === root_child0_child0.getComputedLeft(),
      "45 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child0.getComputedWidth(),
      "40 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child0.getComputedHeight(),
      "40 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0_child0.getComputedLeft(),
      "0 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedTop(),
      "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child0_child0.getComputedWidth(),
      "40 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child0_child0.getComputedHeight(),
      "40 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    assert(
      35 === root_child0_child1.getComputedLeft(),
      "35 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child0_child1.getComputedTop(),
      "40 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child1.getComputedWidth(),
      "40 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child1.getComputedHeight(),
      "40 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child1_child0.getComputedLeft(),
      "0 === root_child0_child1_child0.getComputedLeft() (" + root_child0_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child1_child0.getComputedTop(),
      "0 === root_child0_child1_child0.getComputedTop() (" + root_child0_child1_child0.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child1_child0.getComputedWidth(),
      "40 === root_child0_child1_child0.getComputedWidth() (" + root_child0_child1_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child1_child0.getComputedHeight(),
      "40 === root_child0_child1_child0.getComputedHeight() (" + root_child0_child1_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("wrap_nodes_with_content_sizing_margin_cross", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(500);
    root.setHeight(500);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0.setFlexWrap(Yoga.WRAP_WRAP);
    root_child0.setWidth(70);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0.setWidth(40);
    root_child0_child0_child0.setHeight(40);
    root_child0_child0.insertChild(root_child0_child0_child0, 0);

    var root_child0_child1 = Yoga.Node.create(config);
    root_child0_child1.setMargin(Yoga.EDGE_TOP, 10);
    root_child0.insertChild(root_child0_child1, 1);

    var root_child0_child1_child0 = Yoga.Node.create(config);
    root_child0_child1_child0.setWidth(40);
    root_child0_child1_child0.setHeight(40);
    root_child0_child1.insertChild(root_child0_child1_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(500 === root.getComputedWidth(), "500 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(500 === root.getComputedHeight(), "500 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      70 === root_child0.getComputedWidth(),
      "70 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      90 === root_child0.getComputedHeight(),
      "90 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child0.getComputedWidth(),
      "40 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child0.getComputedHeight(),
      "40 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0_child0.getComputedLeft(),
      "0 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedTop(),
      "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child0_child0.getComputedWidth(),
      "40 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child0_child0.getComputedHeight(),
      "40 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child1.getComputedLeft(),
      "0 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child0_child1.getComputedTop(),
      "50 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child1.getComputedWidth(),
      "40 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child1.getComputedHeight(),
      "40 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child1_child0.getComputedLeft(),
      "0 === root_child0_child1_child0.getComputedLeft() (" + root_child0_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child1_child0.getComputedTop(),
      "0 === root_child0_child1_child0.getComputedTop() (" + root_child0_child1_child0.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child1_child0.getComputedWidth(),
      "40 === root_child0_child1_child0.getComputedWidth() (" + root_child0_child1_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child1_child0.getComputedHeight(),
      "40 === root_child0_child1_child0.getComputedHeight() (" + root_child0_child1_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(500 === root.getComputedWidth(), "500 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(500 === root.getComputedHeight(), "500 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      430 === root_child0.getComputedLeft(),
      "430 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      70 === root_child0.getComputedWidth(),
      "70 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      90 === root_child0.getComputedHeight(),
      "90 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      30 === root_child0_child0.getComputedLeft(),
      "30 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child0.getComputedWidth(),
      "40 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child0.getComputedHeight(),
      "40 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child0_child0.getComputedLeft(),
      "0 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedTop(),
      "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child0_child0.getComputedWidth(),
      "40 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child0_child0.getComputedHeight(),
      "40 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    assert(
      30 === root_child0_child1.getComputedLeft(),
      "30 === root_child0_child1.getComputedLeft() (" + root_child0_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child0_child1.getComputedTop(),
      "50 === root_child0_child1.getComputedTop() (" + root_child0_child1.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child1.getComputedWidth(),
      "40 === root_child0_child1.getComputedWidth() (" + root_child0_child1.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child1.getComputedHeight(),
      "40 === root_child0_child1.getComputedHeight() (" + root_child0_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child0_child1_child0.getComputedLeft(),
      "0 === root_child0_child1_child0.getComputedLeft() (" + root_child0_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child1_child0.getComputedTop(),
      "0 === root_child0_child1_child0.getComputedTop() (" + root_child0_child1_child0.getComputedTop() + ")",
    );
    assert(
      40 === root_child0_child1_child0.getComputedWidth(),
      "40 === root_child0_child1_child0.getComputedWidth() (" + root_child0_child1_child0.getComputedWidth() + ")",
    );
    assert(
      40 === root_child0_child1_child0.getComputedHeight(),
      "40 === root_child0_child1_child0.getComputedHeight() (" + root_child0_child1_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
