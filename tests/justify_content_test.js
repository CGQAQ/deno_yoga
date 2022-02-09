import { assert } from "./deps.ts";
import * as Yoga from "../mod.ts";

Deno.test("justify_content_row_flex_start", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(102);
    root.setHeight(102);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      102 === root_child0.getComputedHeight(),
      "102 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      10 === root_child1.getComputedLeft(),
      "10 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      102 === root_child1.getComputedHeight(),
      "102 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      20 === root_child2.getComputedLeft(),
      "20 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      102 === root_child2.getComputedHeight(),
      "102 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      92 === root_child0.getComputedLeft(),
      "92 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      102 === root_child0.getComputedHeight(),
      "102 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      82 === root_child1.getComputedLeft(),
      "82 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      102 === root_child1.getComputedHeight(),
      "102 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      72 === root_child2.getComputedLeft(),
      "72 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      102 === root_child2.getComputedHeight(),
      "102 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_row_flex_end", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setJustifyContent(Yoga.JUSTIFY_FLEX_END);
    root.setWidth(102);
    root.setHeight(102);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      72 === root_child0.getComputedLeft(),
      "72 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      102 === root_child0.getComputedHeight(),
      "102 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      82 === root_child1.getComputedLeft(),
      "82 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      102 === root_child1.getComputedHeight(),
      "102 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      92 === root_child2.getComputedLeft(),
      "92 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      102 === root_child2.getComputedHeight(),
      "102 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      20 === root_child0.getComputedLeft(),
      "20 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      102 === root_child0.getComputedHeight(),
      "102 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      10 === root_child1.getComputedLeft(),
      "10 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      102 === root_child1.getComputedHeight(),
      "102 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      102 === root_child2.getComputedHeight(),
      "102 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_row_center", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setWidth(102);
    root.setHeight(102);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      36 === root_child0.getComputedLeft(),
      "36 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      102 === root_child0.getComputedHeight(),
      "102 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      46 === root_child1.getComputedLeft(),
      "46 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      102 === root_child1.getComputedHeight(),
      "102 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      56 === root_child2.getComputedLeft(),
      "56 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      102 === root_child2.getComputedHeight(),
      "102 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      56 === root_child0.getComputedLeft(),
      "56 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      102 === root_child0.getComputedHeight(),
      "102 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      46 === root_child1.getComputedLeft(),
      "46 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      102 === root_child1.getComputedHeight(),
      "102 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      36 === root_child2.getComputedLeft(),
      "36 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      102 === root_child2.getComputedHeight(),
      "102 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_row_space_between", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setJustifyContent(Yoga.JUSTIFY_SPACE_BETWEEN);
    root.setWidth(102);
    root.setHeight(102);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      102 === root_child0.getComputedHeight(),
      "102 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      46 === root_child1.getComputedLeft(),
      "46 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      102 === root_child1.getComputedHeight(),
      "102 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      92 === root_child2.getComputedLeft(),
      "92 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      102 === root_child2.getComputedHeight(),
      "102 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      92 === root_child0.getComputedLeft(),
      "92 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      102 === root_child0.getComputedHeight(),
      "102 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      46 === root_child1.getComputedLeft(),
      "46 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      102 === root_child1.getComputedHeight(),
      "102 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      102 === root_child2.getComputedHeight(),
      "102 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_row_space_around", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setJustifyContent(Yoga.JUSTIFY_SPACE_AROUND);
    root.setWidth(102);
    root.setHeight(102);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      12 === root_child0.getComputedLeft(),
      "12 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      102 === root_child0.getComputedHeight(),
      "102 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      46 === root_child1.getComputedLeft(),
      "46 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      102 === root_child1.getComputedHeight(),
      "102 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      80 === root_child2.getComputedLeft(),
      "80 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      102 === root_child2.getComputedHeight(),
      "102 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      80 === root_child0.getComputedLeft(),
      "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      102 === root_child0.getComputedHeight(),
      "102 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      46 === root_child1.getComputedLeft(),
      "46 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      10 === root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      102 === root_child1.getComputedHeight(),
      "102 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      12 === root_child2.getComputedLeft(),
      "12 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      10 === root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      102 === root_child2.getComputedHeight(),
      "102 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_column_flex_start", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(102);
    root.setHeight(102);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      102 === root_child0.getComputedWidth(),
      "102 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      102 === root_child1.getComputedWidth(),
      "102 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      20 === root_child2.getComputedTop(),
      "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      102 === root_child2.getComputedWidth(),
      "102 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      102 === root_child0.getComputedWidth(),
      "102 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      102 === root_child1.getComputedWidth(),
      "102 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      20 === root_child2.getComputedTop(),
      "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      102 === root_child2.getComputedWidth(),
      "102 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_column_flex_end", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_FLEX_END);
    root.setWidth(102);
    root.setHeight(102);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      72 === root_child0.getComputedTop(),
      "72 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      102 === root_child0.getComputedWidth(),
      "102 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      82 === root_child1.getComputedTop(),
      "82 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      102 === root_child1.getComputedWidth(),
      "102 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      92 === root_child2.getComputedTop(),
      "92 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      102 === root_child2.getComputedWidth(),
      "102 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      72 === root_child0.getComputedTop(),
      "72 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      102 === root_child0.getComputedWidth(),
      "102 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      82 === root_child1.getComputedTop(),
      "82 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      102 === root_child1.getComputedWidth(),
      "102 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      92 === root_child2.getComputedTop(),
      "92 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      102 === root_child2.getComputedWidth(),
      "102 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_column_center", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setWidth(102);
    root.setHeight(102);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      36 === root_child0.getComputedTop(),
      "36 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      102 === root_child0.getComputedWidth(),
      "102 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      46 === root_child1.getComputedTop(),
      "46 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      102 === root_child1.getComputedWidth(),
      "102 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      56 === root_child2.getComputedTop(),
      "56 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      102 === root_child2.getComputedWidth(),
      "102 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      36 === root_child0.getComputedTop(),
      "36 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      102 === root_child0.getComputedWidth(),
      "102 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      46 === root_child1.getComputedTop(),
      "46 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      102 === root_child1.getComputedWidth(),
      "102 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      56 === root_child2.getComputedTop(),
      "56 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      102 === root_child2.getComputedWidth(),
      "102 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_column_space_between", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_SPACE_BETWEEN);
    root.setWidth(102);
    root.setHeight(102);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      102 === root_child0.getComputedWidth(),
      "102 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      46 === root_child1.getComputedTop(),
      "46 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      102 === root_child1.getComputedWidth(),
      "102 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      92 === root_child2.getComputedTop(),
      "92 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      102 === root_child2.getComputedWidth(),
      "102 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      102 === root_child0.getComputedWidth(),
      "102 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      46 === root_child1.getComputedTop(),
      "46 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      102 === root_child1.getComputedWidth(),
      "102 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      92 === root_child2.getComputedTop(),
      "92 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      102 === root_child2.getComputedWidth(),
      "102 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_column_space_around", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_SPACE_AROUND);
    root.setWidth(102);
    root.setHeight(102);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      12 === root_child0.getComputedTop(),
      "12 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      102 === root_child0.getComputedWidth(),
      "102 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      46 === root_child1.getComputedTop(),
      "46 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      102 === root_child1.getComputedWidth(),
      "102 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      80 === root_child2.getComputedTop(),
      "80 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      102 === root_child2.getComputedWidth(),
      "102 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      12 === root_child0.getComputedTop(),
      "12 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      102 === root_child0.getComputedWidth(),
      "102 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      46 === root_child1.getComputedTop(),
      "46 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      102 === root_child1.getComputedWidth(),
      "102 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      80 === root_child2.getComputedTop(),
      "80 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      102 === root_child2.getComputedWidth(),
      "102 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_row_min_width_and_margin", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setMargin(Yoga.EDGE_LEFT, 100);
    root.setMinWidth(50);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(20);
    root_child0.setHeight(20);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(100 === root.getComputedLeft(), "100 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(50 === root.getComputedWidth(), "50 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(20 === root.getComputedHeight(), "20 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      15 === root_child0.getComputedLeft(),
      "15 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(100 === root.getComputedLeft(), "100 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(50 === root.getComputedWidth(), "50 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(20 === root.getComputedHeight(), "20 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      15 === root_child0.getComputedLeft(),
      "15 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_row_max_width_and_margin", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setMargin(Yoga.EDGE_LEFT, 100);
    root.setWidth(100);
    root.setMaxWidth(80);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(20);
    root_child0.setHeight(20);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(100 === root.getComputedLeft(), "100 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(80 === root.getComputedWidth(), "80 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(20 === root.getComputedHeight(), "20 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      30 === root_child0.getComputedLeft(),
      "30 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(100 === root.getComputedLeft(), "100 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(80 === root.getComputedWidth(), "80 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(20 === root.getComputedHeight(), "20 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      30 === root_child0.getComputedLeft(),
      "30 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_column_min_height_and_margin", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setMargin(Yoga.EDGE_TOP, 100);
    root.setMinHeight(50);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(20);
    root_child0.setHeight(20);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(100 === root.getComputedTop(), "100 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(20 === root.getComputedWidth(), "20 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(50 === root.getComputedHeight(), "50 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      15 === root_child0.getComputedTop(),
      "15 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(100 === root.getComputedTop(), "100 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(20 === root.getComputedWidth(), "20 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(50 === root.getComputedHeight(), "50 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      15 === root_child0.getComputedTop(),
      "15 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_colunn_max_height_and_margin", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setMargin(Yoga.EDGE_TOP, 100);
    root.setHeight(100);
    root.setMaxHeight(80);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(20);
    root_child0.setHeight(20);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(100 === root.getComputedTop(), "100 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(20 === root.getComputedWidth(), "20 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(80 === root.getComputedHeight(), "80 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      30 === root_child0.getComputedTop(),
      "30 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(100 === root.getComputedTop(), "100 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(20 === root.getComputedWidth(), "20 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(80 === root.getComputedHeight(), "80 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      30 === root_child0.getComputedTop(),
      "30 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child0.getComputedWidth(),
      "20 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_column_space_evenly", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_SPACE_EVENLY);
    root.setWidth(102);
    root.setHeight(102);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      18 === root_child0.getComputedTop(),
      "18 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      102 === root_child0.getComputedWidth(),
      "102 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      46 === root_child1.getComputedTop(),
      "46 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      102 === root_child1.getComputedWidth(),
      "102 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      74 === root_child2.getComputedTop(),
      "74 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      102 === root_child2.getComputedWidth(),
      "102 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      18 === root_child0.getComputedTop(),
      "18 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      102 === root_child0.getComputedWidth(),
      "102 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      46 === root_child1.getComputedTop(),
      "46 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      102 === root_child1.getComputedWidth(),
      "102 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      74 === root_child2.getComputedTop(),
      "74 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      102 === root_child2.getComputedWidth(),
      "102 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_row_space_evenly", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setJustifyContent(Yoga.JUSTIFY_SPACE_EVENLY);
    root.setWidth(102);
    root.setHeight(102);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      26 === root_child0.getComputedLeft(),
      "26 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      0 === root_child0.getComputedWidth(),
      "0 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      51 === root_child1.getComputedLeft(),
      "51 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      0 === root_child1.getComputedWidth(),
      "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      77 === root_child2.getComputedLeft(),
      "77 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      0 === root_child2.getComputedWidth(),
      "0 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(102 === root.getComputedWidth(), "102 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(102 === root.getComputedHeight(), "102 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      77 === root_child0.getComputedLeft(),
      "77 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      0 === root_child0.getComputedWidth(),
      "0 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      51 === root_child1.getComputedLeft(),
      "51 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      0 === root_child1.getComputedWidth(),
      "0 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      26 === root_child2.getComputedLeft(),
      "26 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      0 === root_child2.getComputedWidth(),
      "0 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_min_width_with_padding_child_width_greater_than_parent", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setWidth(1000);
    root.setHeight(1584);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0_child0.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root_child0_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0.setPadding(Yoga.EDGE_LEFT, 100);
    root_child0_child0.setPadding(Yoga.EDGE_RIGHT, 100);
    root_child0_child0.setMinWidth(400);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0_child0_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child0.setWidth(300);
    root_child0_child0_child0.setHeight(100);
    root_child0_child0.insertChild(root_child0_child0_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(1000 === root.getComputedWidth(), "1000 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(1584 === root.getComputedHeight(), "1584 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      1000 === root_child0.getComputedWidth(),
      "1000 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      500 === root_child0_child0.getComputedWidth(),
      "500 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0.getComputedHeight(),
      "100 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      100 === root_child0_child0_child0.getComputedLeft(),
      "100 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedTop(),
      "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      300 === root_child0_child0_child0.getComputedWidth(),
      "300 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0_child0.getComputedHeight(),
      "100 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(1000 === root.getComputedWidth(), "1000 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(1584 === root.getComputedHeight(), "1584 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      1000 === root_child0.getComputedWidth(),
      "1000 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      500 === root_child0_child0.getComputedLeft(),
      "500 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      500 === root_child0_child0.getComputedWidth(),
      "500 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0.getComputedHeight(),
      "100 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      100 === root_child0_child0_child0.getComputedLeft(),
      "100 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedTop(),
      "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      300 === root_child0_child0_child0.getComputedWidth(),
      "300 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0_child0.getComputedHeight(),
      "100 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("justify_content_min_width_with_padding_child_width_lower_than_parent", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignContent(Yoga.ALIGN_STRETCH);
    root.setWidth(1080);
    root.setHeight(1584);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0_child0.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root_child0_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0.setPadding(Yoga.EDGE_LEFT, 100);
    root_child0_child0.setPadding(Yoga.EDGE_RIGHT, 100);
    root_child0_child0.setMinWidth(400);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child0_child0_child0.setAlignContent(Yoga.ALIGN_STRETCH);
    root_child0_child0_child0.setWidth(199);
    root_child0_child0_child0.setHeight(100);
    root_child0_child0.insertChild(root_child0_child0_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(1080 === root.getComputedWidth(), "1080 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(1584 === root.getComputedHeight(), "1584 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      1080 === root_child0.getComputedWidth(),
      "1080 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      400 === root_child0_child0.getComputedWidth(),
      "400 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0.getComputedHeight(),
      "100 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      101 === root_child0_child0_child0.getComputedLeft(),
      "101 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedTop(),
      "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      199 === root_child0_child0_child0.getComputedWidth(),
      "199 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0_child0.getComputedHeight(),
      "100 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(1080 === root.getComputedWidth(), "1080 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(1584 === root.getComputedHeight(), "1584 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      0 === root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      1080 === root_child0.getComputedWidth(),
      "1080 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      680 === root_child0_child0.getComputedLeft(),
      "680 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      400 === root_child0_child0.getComputedWidth(),
      "400 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0.getComputedHeight(),
      "100 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      101 === root_child0_child0_child0.getComputedLeft(),
      "101 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedTop(),
      "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      199 === root_child0_child0_child0.getComputedWidth(),
      "199 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      100 === root_child0_child0_child0.getComputedHeight(),
      "100 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
