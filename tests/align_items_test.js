import { assert } from "./deps.ts";
import * as Yoga from "../mod.ts";

Deno.test("align_items_stretch", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
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
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

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
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_items_center", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

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
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_items_flex_start", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_FLEX_START);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
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
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      90 === root_child0.getComputedLeft(),
      "90 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_items_flex_end", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_FLEX_END);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      90 === root_child0.getComputedLeft(),
      "90 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

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
      10 === root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(20);
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
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      30 === root_child1.getComputedTop(),
      "30 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setWidth(50);
    root_child1_child0.setHeight(10);
    root_child1.insertChild(root_child1_child0, 0);
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
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_child_multiline", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(60);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child1.setFlexWrap(Yoga.WRAP_WRAP);
    root_child1.setWidth(50);
    root_child1.setHeight(25);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setWidth(25);
    root_child1_child0.setHeight(20);
    root_child1.insertChild(root_child1_child0, 0);

    var root_child1_child1 = Yoga.Node.create(config);
    root_child1_child1.setWidth(25);
    root_child1_child1.setHeight(10);
    root_child1.insertChild(root_child1_child1, 1);

    var root_child1_child2 = Yoga.Node.create(config);
    root_child1_child2.setWidth(25);
    root_child1_child2.setHeight(20);
    root_child1.insertChild(root_child1_child2, 2);

    var root_child1_child3 = Yoga.Node.create(config);
    root_child1_child3.setWidth(25);
    root_child1_child3.setHeight(10);
    root_child1.insertChild(root_child1_child3, 3);
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
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      60 === root_child0.getComputedHeight(),
      "60 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      25 === root_child1.getComputedHeight(),
      "25 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child0.getComputedWidth(),
      "25 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedHeight(),
      "20 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      25 === root_child1_child1.getComputedLeft(),
      "25 === root_child1_child1.getComputedLeft() (" + root_child1_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child1.getComputedTop(),
      "0 === root_child1_child1.getComputedTop() (" + root_child1_child1.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child1.getComputedWidth(),
      "25 === root_child1_child1.getComputedWidth() (" + root_child1_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child1.getComputedHeight(),
      "10 === root_child1_child1.getComputedHeight() (" + root_child1_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child2.getComputedLeft(),
      "0 === root_child1_child2.getComputedLeft() (" + root_child1_child2.getComputedLeft() + ")",
    );
    assert(
      20 === root_child1_child2.getComputedTop(),
      "20 === root_child1_child2.getComputedTop() (" + root_child1_child2.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child2.getComputedWidth(),
      "25 === root_child1_child2.getComputedWidth() (" + root_child1_child2.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child2.getComputedHeight(),
      "20 === root_child1_child2.getComputedHeight() (" + root_child1_child2.getComputedHeight() + ")",
    );

    assert(
      25 === root_child1_child3.getComputedLeft(),
      "25 === root_child1_child3.getComputedLeft() (" + root_child1_child3.getComputedLeft() + ")",
    );
    assert(
      20 === root_child1_child3.getComputedTop(),
      "20 === root_child1_child3.getComputedTop() (" + root_child1_child3.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child3.getComputedWidth(),
      "25 === root_child1_child3.getComputedWidth() (" + root_child1_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child3.getComputedHeight(),
      "10 === root_child1_child3.getComputedHeight() (" + root_child1_child3.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      60 === root_child0.getComputedHeight(),
      "60 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      25 === root_child1.getComputedHeight(),
      "25 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      25 === root_child1_child0.getComputedLeft(),
      "25 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child0.getComputedWidth(),
      "25 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedHeight(),
      "20 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child1.getComputedLeft(),
      "0 === root_child1_child1.getComputedLeft() (" + root_child1_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child1.getComputedTop(),
      "0 === root_child1_child1.getComputedTop() (" + root_child1_child1.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child1.getComputedWidth(),
      "25 === root_child1_child1.getComputedWidth() (" + root_child1_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child1.getComputedHeight(),
      "10 === root_child1_child1.getComputedHeight() (" + root_child1_child1.getComputedHeight() + ")",
    );

    assert(
      25 === root_child1_child2.getComputedLeft(),
      "25 === root_child1_child2.getComputedLeft() (" + root_child1_child2.getComputedLeft() + ")",
    );
    assert(
      20 === root_child1_child2.getComputedTop(),
      "20 === root_child1_child2.getComputedTop() (" + root_child1_child2.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child2.getComputedWidth(),
      "25 === root_child1_child2.getComputedWidth() (" + root_child1_child2.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child2.getComputedHeight(),
      "20 === root_child1_child2.getComputedHeight() (" + root_child1_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child3.getComputedLeft(),
      "0 === root_child1_child3.getComputedLeft() (" + root_child1_child3.getComputedLeft() + ")",
    );
    assert(
      20 === root_child1_child3.getComputedTop(),
      "20 === root_child1_child3.getComputedTop() (" + root_child1_child3.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child3.getComputedWidth(),
      "25 === root_child1_child3.getComputedWidth() (" + root_child1_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child3.getComputedHeight(),
      "10 === root_child1_child3.getComputedHeight() (" + root_child1_child3.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_child_multiline_override", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(60);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child1.setFlexWrap(Yoga.WRAP_WRAP);
    root_child1.setWidth(50);
    root_child1.setHeight(25);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setWidth(25);
    root_child1_child0.setHeight(20);
    root_child1.insertChild(root_child1_child0, 0);

    var root_child1_child1 = Yoga.Node.create(config);
    root_child1_child1.setAlignSelf(Yoga.ALIGN_BASELINE);
    root_child1_child1.setWidth(25);
    root_child1_child1.setHeight(10);
    root_child1.insertChild(root_child1_child1, 1);

    var root_child1_child2 = Yoga.Node.create(config);
    root_child1_child2.setWidth(25);
    root_child1_child2.setHeight(20);
    root_child1.insertChild(root_child1_child2, 2);

    var root_child1_child3 = Yoga.Node.create(config);
    root_child1_child3.setAlignSelf(Yoga.ALIGN_BASELINE);
    root_child1_child3.setWidth(25);
    root_child1_child3.setHeight(10);
    root_child1.insertChild(root_child1_child3, 3);
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
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      60 === root_child0.getComputedHeight(),
      "60 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      25 === root_child1.getComputedHeight(),
      "25 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child0.getComputedWidth(),
      "25 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedHeight(),
      "20 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      25 === root_child1_child1.getComputedLeft(),
      "25 === root_child1_child1.getComputedLeft() (" + root_child1_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child1.getComputedTop(),
      "0 === root_child1_child1.getComputedTop() (" + root_child1_child1.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child1.getComputedWidth(),
      "25 === root_child1_child1.getComputedWidth() (" + root_child1_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child1.getComputedHeight(),
      "10 === root_child1_child1.getComputedHeight() (" + root_child1_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child2.getComputedLeft(),
      "0 === root_child1_child2.getComputedLeft() (" + root_child1_child2.getComputedLeft() + ")",
    );
    assert(
      20 === root_child1_child2.getComputedTop(),
      "20 === root_child1_child2.getComputedTop() (" + root_child1_child2.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child2.getComputedWidth(),
      "25 === root_child1_child2.getComputedWidth() (" + root_child1_child2.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child2.getComputedHeight(),
      "20 === root_child1_child2.getComputedHeight() (" + root_child1_child2.getComputedHeight() + ")",
    );

    assert(
      25 === root_child1_child3.getComputedLeft(),
      "25 === root_child1_child3.getComputedLeft() (" + root_child1_child3.getComputedLeft() + ")",
    );
    assert(
      20 === root_child1_child3.getComputedTop(),
      "20 === root_child1_child3.getComputedTop() (" + root_child1_child3.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child3.getComputedWidth(),
      "25 === root_child1_child3.getComputedWidth() (" + root_child1_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child3.getComputedHeight(),
      "10 === root_child1_child3.getComputedHeight() (" + root_child1_child3.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      60 === root_child0.getComputedHeight(),
      "60 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      25 === root_child1.getComputedHeight(),
      "25 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      25 === root_child1_child0.getComputedLeft(),
      "25 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child0.getComputedWidth(),
      "25 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedHeight(),
      "20 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child1.getComputedLeft(),
      "0 === root_child1_child1.getComputedLeft() (" + root_child1_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child1.getComputedTop(),
      "0 === root_child1_child1.getComputedTop() (" + root_child1_child1.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child1.getComputedWidth(),
      "25 === root_child1_child1.getComputedWidth() (" + root_child1_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child1.getComputedHeight(),
      "10 === root_child1_child1.getComputedHeight() (" + root_child1_child1.getComputedHeight() + ")",
    );

    assert(
      25 === root_child1_child2.getComputedLeft(),
      "25 === root_child1_child2.getComputedLeft() (" + root_child1_child2.getComputedLeft() + ")",
    );
    assert(
      20 === root_child1_child2.getComputedTop(),
      "20 === root_child1_child2.getComputedTop() (" + root_child1_child2.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child2.getComputedWidth(),
      "25 === root_child1_child2.getComputedWidth() (" + root_child1_child2.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child2.getComputedHeight(),
      "20 === root_child1_child2.getComputedHeight() (" + root_child1_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child3.getComputedLeft(),
      "0 === root_child1_child3.getComputedLeft() (" + root_child1_child3.getComputedLeft() + ")",
    );
    assert(
      20 === root_child1_child3.getComputedTop(),
      "20 === root_child1_child3.getComputedTop() (" + root_child1_child3.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child3.getComputedWidth(),
      "25 === root_child1_child3.getComputedWidth() (" + root_child1_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child3.getComputedHeight(),
      "10 === root_child1_child3.getComputedHeight() (" + root_child1_child3.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_child_multiline_no_override_on_secondline", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(60);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root_child1.setFlexWrap(Yoga.WRAP_WRAP);
    root_child1.setWidth(50);
    root_child1.setHeight(25);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setWidth(25);
    root_child1_child0.setHeight(20);
    root_child1.insertChild(root_child1_child0, 0);

    var root_child1_child1 = Yoga.Node.create(config);
    root_child1_child1.setWidth(25);
    root_child1_child1.setHeight(10);
    root_child1.insertChild(root_child1_child1, 1);

    var root_child1_child2 = Yoga.Node.create(config);
    root_child1_child2.setWidth(25);
    root_child1_child2.setHeight(20);
    root_child1.insertChild(root_child1_child2, 2);

    var root_child1_child3 = Yoga.Node.create(config);
    root_child1_child3.setAlignSelf(Yoga.ALIGN_BASELINE);
    root_child1_child3.setWidth(25);
    root_child1_child3.setHeight(10);
    root_child1.insertChild(root_child1_child3, 3);
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
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      60 === root_child0.getComputedHeight(),
      "60 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      25 === root_child1.getComputedHeight(),
      "25 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child0.getComputedWidth(),
      "25 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedHeight(),
      "20 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      25 === root_child1_child1.getComputedLeft(),
      "25 === root_child1_child1.getComputedLeft() (" + root_child1_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child1.getComputedTop(),
      "0 === root_child1_child1.getComputedTop() (" + root_child1_child1.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child1.getComputedWidth(),
      "25 === root_child1_child1.getComputedWidth() (" + root_child1_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child1.getComputedHeight(),
      "10 === root_child1_child1.getComputedHeight() (" + root_child1_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child2.getComputedLeft(),
      "0 === root_child1_child2.getComputedLeft() (" + root_child1_child2.getComputedLeft() + ")",
    );
    assert(
      20 === root_child1_child2.getComputedTop(),
      "20 === root_child1_child2.getComputedTop() (" + root_child1_child2.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child2.getComputedWidth(),
      "25 === root_child1_child2.getComputedWidth() (" + root_child1_child2.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child2.getComputedHeight(),
      "20 === root_child1_child2.getComputedHeight() (" + root_child1_child2.getComputedHeight() + ")",
    );

    assert(
      25 === root_child1_child3.getComputedLeft(),
      "25 === root_child1_child3.getComputedLeft() (" + root_child1_child3.getComputedLeft() + ")",
    );
    assert(
      20 === root_child1_child3.getComputedTop(),
      "20 === root_child1_child3.getComputedTop() (" + root_child1_child3.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child3.getComputedWidth(),
      "25 === root_child1_child3.getComputedWidth() (" + root_child1_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child3.getComputedHeight(),
      "10 === root_child1_child3.getComputedHeight() (" + root_child1_child3.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      60 === root_child0.getComputedHeight(),
      "60 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      25 === root_child1.getComputedHeight(),
      "25 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      25 === root_child1_child0.getComputedLeft(),
      "25 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child0.getComputedWidth(),
      "25 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedHeight(),
      "20 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child1.getComputedLeft(),
      "0 === root_child1_child1.getComputedLeft() (" + root_child1_child1.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child1.getComputedTop(),
      "0 === root_child1_child1.getComputedTop() (" + root_child1_child1.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child1.getComputedWidth(),
      "25 === root_child1_child1.getComputedWidth() (" + root_child1_child1.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child1.getComputedHeight(),
      "10 === root_child1_child1.getComputedHeight() (" + root_child1_child1.getComputedHeight() + ")",
    );

    assert(
      25 === root_child1_child2.getComputedLeft(),
      "25 === root_child1_child2.getComputedLeft() (" + root_child1_child2.getComputedLeft() + ")",
    );
    assert(
      20 === root_child1_child2.getComputedTop(),
      "20 === root_child1_child2.getComputedTop() (" + root_child1_child2.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child2.getComputedWidth(),
      "25 === root_child1_child2.getComputedWidth() (" + root_child1_child2.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child2.getComputedHeight(),
      "20 === root_child1_child2.getComputedHeight() (" + root_child1_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child3.getComputedLeft(),
      "0 === root_child1_child3.getComputedLeft() (" + root_child1_child3.getComputedLeft() + ")",
    );
    assert(
      20 === root_child1_child3.getComputedTop(),
      "20 === root_child1_child3.getComputedTop() (" + root_child1_child3.getComputedTop() + ")",
    );
    assert(
      25 === root_child1_child3.getComputedWidth(),
      "25 === root_child1_child3.getComputedWidth() (" + root_child1_child3.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child3.getComputedHeight(),
      "10 === root_child1_child3.getComputedHeight() (" + root_child1_child3.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_child_top", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPosition(Yoga.EDGE_TOP, 10);
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setWidth(50);
    root_child1_child0.setHeight(10);
    root_child1.insertChild(root_child1_child0, 0);
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
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      10 === root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_child_top2", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setPosition(Yoga.EDGE_TOP, 5);
    root_child1.setWidth(50);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setWidth(50);
    root_child1_child0.setHeight(10);
    root_child1.insertChild(root_child1_child0, 0);
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
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      45 === root_child1.getComputedTop(),
      "45 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      45 === root_child1.getComputedTop(),
      "45 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_double_nested_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setWidth(50);
    root_child0_child0.setHeight(20);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setWidth(50);
    root_child1_child0.setHeight(15);
    root_child1.insertChild(root_child1_child0, 0);
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
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      50 === root_child0_child0.getComputedWidth(),
      "50 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0_child0.getComputedHeight(),
      "20 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      5 === root_child1.getComputedTop(),
      "5 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      15 === root_child1_child0.getComputedHeight(),
      "15 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      50 === root_child0_child0.getComputedWidth(),
      "50 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0_child0.getComputedHeight(),
      "20 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      5 === root_child1.getComputedTop(),
      "5 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      15 === root_child1_child0.getComputedHeight(),
      "15 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_column", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(20);
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
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_child_margin", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setMargin(Yoga.EDGE_LEFT, 5);
    root_child0.setMargin(Yoga.EDGE_TOP, 5);
    root_child0.setMargin(Yoga.EDGE_RIGHT, 5);
    root_child0.setMargin(Yoga.EDGE_BOTTOM, 5);
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setMargin(Yoga.EDGE_LEFT, 1);
    root_child1_child0.setMargin(Yoga.EDGE_TOP, 1);
    root_child1_child0.setMargin(Yoga.EDGE_RIGHT, 1);
    root_child1_child0.setMargin(Yoga.EDGE_BOTTOM, 1);
    root_child1_child0.setWidth(50);
    root_child1_child0.setHeight(10);
    root_child1.insertChild(root_child1_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      5 === root_child0.getComputedLeft(),
      "5 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      5 === root_child0.getComputedTop(),
      "5 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      60 === root_child1.getComputedLeft(),
      "60 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      44 === root_child1.getComputedTop(),
      "44 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      1 === root_child1_child0.getComputedLeft(),
      "1 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      1 === root_child1_child0.getComputedTop(),
      "1 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
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
      5 === root_child0.getComputedTop(),
      "5 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      -10 === root_child1.getComputedLeft(),
      "-10 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      44 === root_child1.getComputedTop(),
      "44 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      -1 === root_child1_child0.getComputedLeft(),
      "-1 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      1 === root_child1_child0.getComputedTop(),
      "1 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_child_padding", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setPadding(Yoga.EDGE_LEFT, 5);
    root.setPadding(Yoga.EDGE_TOP, 5);
    root.setPadding(Yoga.EDGE_RIGHT, 5);
    root.setPadding(Yoga.EDGE_BOTTOM, 5);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setPadding(Yoga.EDGE_LEFT, 5);
    root_child1.setPadding(Yoga.EDGE_TOP, 5);
    root_child1.setPadding(Yoga.EDGE_RIGHT, 5);
    root_child1.setPadding(Yoga.EDGE_BOTTOM, 5);
    root_child1.setWidth(50);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setWidth(50);
    root_child1_child0.setHeight(10);
    root_child1.insertChild(root_child1_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      5 === root_child0.getComputedLeft(),
      "5 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      5 === root_child0.getComputedTop(),
      "5 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      55 === root_child1.getComputedLeft(),
      "55 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      5 === root_child1_child0.getComputedLeft(),
      "5 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      5 === root_child1_child0.getComputedTop(),
      "5 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
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
      5 === root_child0.getComputedTop(),
      "5 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      -5 === root_child1.getComputedLeft(),
      "-5 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      -5 === root_child1_child0.getComputedLeft(),
      "-5 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      5 === root_child1_child0.getComputedTop(),
      "5 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_multiline", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(20);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setWidth(50);
    root_child1_child0.setHeight(10);
    root_child1.insertChild(root_child1_child0, 0);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root_child2.setHeight(20);
    root.insertChild(root_child2, 2);

    var root_child2_child0 = Yoga.Node.create(config);
    root_child2_child0.setWidth(50);
    root_child2_child0.setHeight(10);
    root_child2.insertChild(root_child2_child0, 0);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root_child3.setHeight(50);
    root.insertChild(root_child3, 3);
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
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      100 === root_child2.getComputedTop(),
      "100 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      20 === root_child2.getComputedHeight(),
      "20 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2_child0.getComputedLeft(),
      "0 === root_child2_child0.getComputedLeft() (" + root_child2_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2_child0.getComputedTop(),
      "0 === root_child2_child0.getComputedTop() (" + root_child2_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child2_child0.getComputedWidth(),
      "50 === root_child2_child0.getComputedWidth() (" + root_child2_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2_child0.getComputedHeight(),
      "10 === root_child2_child0.getComputedHeight() (" + root_child2_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child3.getComputedLeft(),
      "50 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      60 === root_child3.getComputedTop(),
      "60 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1.getComputedHeight(),
      "20 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child2.getComputedLeft(),
      "50 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      100 === root_child2.getComputedTop(),
      "100 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      20 === root_child2.getComputedHeight(),
      "20 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2_child0.getComputedLeft(),
      "0 === root_child2_child0.getComputedLeft() (" + root_child2_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2_child0.getComputedTop(),
      "0 === root_child2_child0.getComputedTop() (" + root_child2_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child2_child0.getComputedWidth(),
      "50 === root_child2_child0.getComputedWidth() (" + root_child2_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2_child0.getComputedHeight(),
      "10 === root_child2_child0.getComputedHeight() (" + root_child2_child0.getComputedHeight() + ")",
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
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      50 === root_child3.getComputedHeight(),
      "50 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_multiline_column", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(30);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setWidth(20);
    root_child1_child0.setHeight(20);
    root_child1.insertChild(root_child1_child0, 0);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(40);
    root_child2.setHeight(70);
    root.insertChild(root_child2, 2);

    var root_child2_child0 = Yoga.Node.create(config);
    root_child2_child0.setWidth(10);
    root_child2_child0.setHeight(10);
    root_child2.insertChild(root_child2_child0, 0);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root_child3.setHeight(20);
    root.insertChild(root_child3, 3);
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
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedWidth(),
      "20 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedHeight(),
      "20 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child2.getComputedLeft(),
      "50 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      40 === root_child2.getComputedWidth(),
      "40 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      70 === root_child2.getComputedHeight(),
      "70 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2_child0.getComputedLeft(),
      "0 === root_child2_child0.getComputedLeft() (" + root_child2_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2_child0.getComputedTop(),
      "0 === root_child2_child0.getComputedTop() (" + root_child2_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child2_child0.getComputedWidth(),
      "10 === root_child2_child0.getComputedWidth() (" + root_child2_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2_child0.getComputedHeight(),
      "10 === root_child2_child0.getComputedHeight() (" + root_child2_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child3.getComputedLeft(),
      "50 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      70 === root_child3.getComputedTop(),
      "70 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      20 === root_child3.getComputedHeight(),
      "20 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      70 === root_child1.getComputedLeft(),
      "70 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      10 === root_child1_child0.getComputedLeft(),
      "10 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedWidth(),
      "20 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedHeight(),
      "20 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
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
      40 === root_child2.getComputedWidth(),
      "40 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      70 === root_child2.getComputedHeight(),
      "70 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      30 === root_child2_child0.getComputedLeft(),
      "30 === root_child2_child0.getComputedLeft() (" + root_child2_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2_child0.getComputedTop(),
      "0 === root_child2_child0.getComputedTop() (" + root_child2_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child2_child0.getComputedWidth(),
      "10 === root_child2_child0.getComputedWidth() (" + root_child2_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2_child0.getComputedHeight(),
      "10 === root_child2_child0.getComputedHeight() (" + root_child2_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      70 === root_child3.getComputedTop(),
      "70 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      20 === root_child3.getComputedHeight(),
      "20 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_multiline_column2", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(30);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setWidth(20);
    root_child1_child0.setHeight(20);
    root_child1.insertChild(root_child1_child0, 0);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(40);
    root_child2.setHeight(70);
    root.insertChild(root_child2, 2);

    var root_child2_child0 = Yoga.Node.create(config);
    root_child2_child0.setWidth(10);
    root_child2_child0.setHeight(10);
    root_child2.insertChild(root_child2_child0, 0);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root_child3.setHeight(20);
    root.insertChild(root_child3, 3);
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
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
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
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedWidth(),
      "20 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedHeight(),
      "20 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child2.getComputedLeft(),
      "50 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      40 === root_child2.getComputedWidth(),
      "40 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      70 === root_child2.getComputedHeight(),
      "70 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2_child0.getComputedLeft(),
      "0 === root_child2_child0.getComputedLeft() (" + root_child2_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2_child0.getComputedTop(),
      "0 === root_child2_child0.getComputedTop() (" + root_child2_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child2_child0.getComputedWidth(),
      "10 === root_child2_child0.getComputedWidth() (" + root_child2_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2_child0.getComputedHeight(),
      "10 === root_child2_child0.getComputedHeight() (" + root_child2_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child3.getComputedLeft(),
      "50 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      70 === root_child3.getComputedTop(),
      "70 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      20 === root_child3.getComputedHeight(),
      "20 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      70 === root_child1.getComputedLeft(),
      "70 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      50 === root_child1.getComputedTop(),
      "50 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      30 === root_child1.getComputedWidth(),
      "30 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      10 === root_child1_child0.getComputedLeft(),
      "10 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedWidth(),
      "20 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child1_child0.getComputedHeight(),
      "20 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
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
      40 === root_child2.getComputedWidth(),
      "40 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      70 === root_child2.getComputedHeight(),
      "70 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      30 === root_child2_child0.getComputedLeft(),
      "30 === root_child2_child0.getComputedLeft() (" + root_child2_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2_child0.getComputedTop(),
      "0 === root_child2_child0.getComputedTop() (" + root_child2_child0.getComputedTop() + ")",
    );
    assert(
      10 === root_child2_child0.getComputedWidth(),
      "10 === root_child2_child0.getComputedWidth() (" + root_child2_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2_child0.getComputedHeight(),
      "10 === root_child2_child0.getComputedHeight() (" + root_child2_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      70 === root_child3.getComputedTop(),
      "70 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      20 === root_child3.getComputedHeight(),
      "20 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_baseline_multiline_row_and_column", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setAlignItems(Yoga.ALIGN_BASELINE);
    root.setFlexWrap(Yoga.WRAP_WRAP);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(50);
    root_child0.setHeight(50);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(50);
    root_child1.setHeight(50);
    root.insertChild(root_child1, 1);

    var root_child1_child0 = Yoga.Node.create(config);
    root_child1_child0.setWidth(50);
    root_child1_child0.setHeight(10);
    root_child1.insertChild(root_child1_child0, 0);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(50);
    root_child2.setHeight(20);
    root.insertChild(root_child2, 2);

    var root_child2_child0 = Yoga.Node.create(config);
    root_child2_child0.setWidth(50);
    root_child2_child0.setHeight(10);
    root_child2.insertChild(root_child2_child0, 0);

    var root_child3 = Yoga.Node.create(config);
    root_child3.setWidth(50);
    root_child3.setHeight(20);
    root.insertChild(root_child3, 3);
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
      50 === root_child0.getComputedWidth(),
      "50 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child1.getComputedLeft(),
      "50 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      100 === root_child2.getComputedTop(),
      "100 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      20 === root_child2.getComputedHeight(),
      "20 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2_child0.getComputedLeft(),
      "0 === root_child2_child0.getComputedLeft() (" + root_child2_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2_child0.getComputedTop(),
      "0 === root_child2_child0.getComputedTop() (" + root_child2_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child2_child0.getComputedWidth(),
      "50 === root_child2_child0.getComputedWidth() (" + root_child2_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2_child0.getComputedHeight(),
      "10 === root_child2_child0.getComputedHeight() (" + root_child2_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child3.getComputedLeft(),
      "50 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      90 === root_child3.getComputedTop(),
      "90 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      20 === root_child3.getComputedHeight(),
      "20 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      50 === root_child0.getComputedLeft(),
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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
      50 === root_child0.getComputedHeight(),
      "50 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")",
    );
    assert(
      40 === root_child1.getComputedTop(),
      "40 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")",
    );
    assert(
      50 === root_child1.getComputedWidth(),
      "50 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")",
    );
    assert(
      50 === root_child1.getComputedHeight(),
      "50 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")",
    );

    assert(
      0 === root_child1_child0.getComputedLeft(),
      "0 === root_child1_child0.getComputedLeft() (" + root_child1_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child1_child0.getComputedTop(),
      "0 === root_child1_child0.getComputedTop() (" + root_child1_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child1_child0.getComputedWidth(),
      "50 === root_child1_child0.getComputedWidth() (" + root_child1_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child1_child0.getComputedHeight(),
      "10 === root_child1_child0.getComputedHeight() (" + root_child1_child0.getComputedHeight() + ")",
    );

    assert(
      50 === root_child2.getComputedLeft(),
      "50 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")",
    );
    assert(
      100 === root_child2.getComputedTop(),
      "100 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")",
    );
    assert(
      50 === root_child2.getComputedWidth(),
      "50 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")",
    );
    assert(
      20 === root_child2.getComputedHeight(),
      "20 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")",
    );

    assert(
      0 === root_child2_child0.getComputedLeft(),
      "0 === root_child2_child0.getComputedLeft() (" + root_child2_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child2_child0.getComputedTop(),
      "0 === root_child2_child0.getComputedTop() (" + root_child2_child0.getComputedTop() + ")",
    );
    assert(
      50 === root_child2_child0.getComputedWidth(),
      "50 === root_child2_child0.getComputedWidth() (" + root_child2_child0.getComputedWidth() + ")",
    );
    assert(
      10 === root_child2_child0.getComputedHeight(),
      "10 === root_child2_child0.getComputedHeight() (" + root_child2_child0.getComputedHeight() + ")",
    );

    assert(
      0 === root_child3.getComputedLeft(),
      "0 === root_child3.getComputedLeft() (" + root_child3.getComputedLeft() + ")",
    );
    assert(
      90 === root_child3.getComputedTop(),
      "90 === root_child3.getComputedTop() (" + root_child3.getComputedTop() + ")",
    );
    assert(
      50 === root_child3.getComputedWidth(),
      "50 === root_child3.getComputedWidth() (" + root_child3.getComputedWidth() + ")",
    );
    assert(
      20 === root_child3.getComputedHeight(),
      "20 === root_child3.getComputedHeight() (" + root_child3.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_items_center_child_with_margin_bigger_than_parent", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(52);
    root.setHeight(52);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setAlignItems(Yoga.ALIGN_CENTER);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setMargin(Yoga.EDGE_LEFT, 10);
    root_child0_child0.setMargin(Yoga.EDGE_RIGHT, 10);
    root_child0_child0.setWidth(52);
    root_child0_child0.setHeight(52);
    root_child0.insertChild(root_child0_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -10 === root_child0.getComputedLeft(),
      "-10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      52 === root_child0.getComputedHeight(),
      "52 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      10 === root_child0_child0.getComputedLeft(),
      "10 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      52 === root_child0_child0.getComputedWidth(),
      "52 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      52 === root_child0_child0.getComputedHeight(),
      "52 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -10 === root_child0.getComputedLeft(),
      "-10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      52 === root_child0.getComputedHeight(),
      "52 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      10 === root_child0_child0.getComputedLeft(),
      "10 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      52 === root_child0_child0.getComputedWidth(),
      "52 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      52 === root_child0_child0.getComputedHeight(),
      "52 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_items_flex_end_child_with_margin_bigger_than_parent", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(52);
    root.setHeight(52);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setAlignItems(Yoga.ALIGN_FLEX_END);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setMargin(Yoga.EDGE_LEFT, 10);
    root_child0_child0.setMargin(Yoga.EDGE_RIGHT, 10);
    root_child0_child0.setWidth(52);
    root_child0_child0.setHeight(52);
    root_child0.insertChild(root_child0_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -10 === root_child0.getComputedLeft(),
      "-10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      52 === root_child0.getComputedHeight(),
      "52 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      10 === root_child0_child0.getComputedLeft(),
      "10 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      52 === root_child0_child0.getComputedWidth(),
      "52 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      52 === root_child0_child0.getComputedHeight(),
      "52 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -10 === root_child0.getComputedLeft(),
      "-10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      52 === root_child0.getComputedHeight(),
      "52 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
    );

    assert(
      10 === root_child0_child0.getComputedLeft(),
      "10 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      52 === root_child0_child0.getComputedWidth(),
      "52 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      52 === root_child0_child0.getComputedHeight(),
      "52 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_items_center_child_without_margin_bigger_than_parent", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(52);
    root.setHeight(52);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setAlignItems(Yoga.ALIGN_CENTER);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setWidth(72);
    root_child0_child0.setHeight(72);
    root_child0.insertChild(root_child0_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -10 === root_child0.getComputedLeft(),
      "-10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -10 === root_child0.getComputedTop(),
      "-10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0.getComputedHeight(),
      "72 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      72 === root_child0_child0.getComputedWidth(),
      "72 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0_child0.getComputedHeight(),
      "72 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -10 === root_child0.getComputedLeft(),
      "-10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -10 === root_child0.getComputedTop(),
      "-10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0.getComputedHeight(),
      "72 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      72 === root_child0_child0.getComputedWidth(),
      "72 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0_child0.getComputedHeight(),
      "72 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_items_flex_end_child_without_margin_bigger_than_parent", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setWidth(52);
    root.setHeight(52);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setAlignItems(Yoga.ALIGN_FLEX_END);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setWidth(72);
    root_child0_child0.setHeight(72);
    root_child0.insertChild(root_child0_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -10 === root_child0.getComputedLeft(),
      "-10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -10 === root_child0.getComputedTop(),
      "-10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0.getComputedHeight(),
      "72 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      72 === root_child0_child0.getComputedWidth(),
      "72 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0_child0.getComputedHeight(),
      "72 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(52 === root.getComputedWidth(), "52 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(52 === root.getComputedHeight(), "52 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      -10 === root_child0.getComputedLeft(),
      "-10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
    );
    assert(
      -10 === root_child0.getComputedTop(),
      "-10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")",
    );
    assert(
      72 === root_child0.getComputedWidth(),
      "72 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0.getComputedHeight(),
      "72 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      72 === root_child0_child0.getComputedWidth(),
      "72 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      72 === root_child0_child0.getComputedHeight(),
      "72 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_center_should_size_based_on_content", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setMargin(Yoga.EDGE_TOP, 20);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root_child0.setFlexShrink(1);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setFlexGrow(1);
    root_child0_child0.setFlexShrink(1);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0.setWidth(20);
    root_child0_child0_child0.setHeight(20);
    root_child0_child0.insertChild(root_child0_child0_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(20 === root.getComputedTop(), "20 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      40 === root_child0.getComputedLeft(),
      "40 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child0_child0.getComputedWidth(),
      "20 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0_child0.getComputedHeight(),
      "20 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
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
      20 === root_child0_child0_child0.getComputedWidth(),
      "20 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0_child0_child0.getComputedHeight(),
      "20 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(20 === root.getComputedTop(), "20 === root.getComputedTop() (" + root.getComputedTop() + ")");
    assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    assert(
      40 === root_child0.getComputedLeft(),
      "40 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")",
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

    assert(
      0 === root_child0_child0.getComputedLeft(),
      "0 === root_child0_child0.getComputedLeft() (" + root_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedTop(),
      "0 === root_child0_child0.getComputedTop() (" + root_child0_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child0_child0.getComputedWidth(),
      "20 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0_child0.getComputedHeight(),
      "20 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
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
      20 === root_child0_child0_child0.getComputedWidth(),
      "20 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0_child0_child0.getComputedHeight(),
      "20 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_strech_should_size_based_on_parent", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setMargin(Yoga.EDGE_TOP, 20);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root_child0.setFlexShrink(1);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setFlexGrow(1);
    root_child0_child0.setFlexShrink(1);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0.setWidth(20);
    root_child0_child0_child0.setHeight(20);
    root_child0_child0.insertChild(root_child0_child0_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(20 === root.getComputedTop(), "20 === root.getComputedTop() (" + root.getComputedTop() + ")");
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
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      20 === root_child0_child0.getComputedHeight(),
      "20 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
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
      20 === root_child0_child0_child0.getComputedWidth(),
      "20 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0_child0_child0.getComputedHeight(),
      "20 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    assert(20 === root.getComputedTop(), "20 === root.getComputedTop() (" + root.getComputedTop() + ")");
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
      100 === root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0.getComputedHeight(),
      "20 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      20 === root_child0_child0.getComputedHeight(),
      "20 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
    );

    assert(
      80 === root_child0_child0_child0.getComputedLeft(),
      "80 === root_child0_child0_child0.getComputedLeft() (" + root_child0_child0_child0.getComputedLeft() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedTop(),
      "0 === root_child0_child0_child0.getComputedTop() (" + root_child0_child0_child0.getComputedTop() + ")",
    );
    assert(
      20 === root_child0_child0_child0.getComputedWidth(),
      "20 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      20 === root_child0_child0_child0.getComputedHeight(),
      "20 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_flex_start_with_shrinking_children", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(500);
    root.setHeight(500);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setAlignItems(Yoga.ALIGN_FLEX_START);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setFlexGrow(1);
    root_child0_child0.setFlexShrink(1);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0.setFlexGrow(1);
    root_child0_child0_child0.setFlexShrink(1);
    root_child0_child0.insertChild(root_child0_child0_child0, 0);
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
      500 === root_child0.getComputedWidth(),
      "500 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      0 === root_child0_child0.getComputedWidth(),
      "0 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedHeight(),
      "0 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
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
      0 === root_child0_child0_child0.getComputedWidth(),
      "0 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedHeight(),
      "0 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

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
      500 === root_child0.getComputedWidth(),
      "500 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      0 === root_child0_child0.getComputedWidth(),
      "0 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedHeight(),
      "0 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
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
      0 === root_child0_child0_child0.getComputedWidth(),
      "0 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedHeight(),
      "0 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_flex_start_with_stretching_children", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(500);
    root.setHeight(500);

    var root_child0 = Yoga.Node.create(config);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setFlexGrow(1);
    root_child0_child0.setFlexShrink(1);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0.setFlexGrow(1);
    root_child0_child0_child0.setFlexShrink(1);
    root_child0_child0.insertChild(root_child0_child0_child0, 0);
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
      500 === root_child0.getComputedWidth(),
      "500 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      0 === root_child0_child0.getComputedHeight(),
      "0 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
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
      500 === root_child0_child0_child0.getComputedWidth(),
      "500 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedHeight(),
      "0 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

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
      500 === root_child0.getComputedWidth(),
      "500 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      0 === root_child0_child0.getComputedHeight(),
      "0 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
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
      500 === root_child0_child0_child0.getComputedWidth(),
      "500 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedHeight(),
      "0 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
Deno.test("align_flex_start_with_shrinking_children_with_stretch", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(500);
    root.setHeight(500);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setAlignItems(Yoga.ALIGN_FLEX_START);
    root.insertChild(root_child0, 0);

    var root_child0_child0 = Yoga.Node.create(config);
    root_child0_child0.setFlexGrow(1);
    root_child0_child0.setFlexShrink(1);
    root_child0.insertChild(root_child0_child0, 0);

    var root_child0_child0_child0 = Yoga.Node.create(config);
    root_child0_child0_child0.setFlexGrow(1);
    root_child0_child0_child0.setFlexShrink(1);
    root_child0_child0.insertChild(root_child0_child0_child0, 0);
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
      500 === root_child0.getComputedWidth(),
      "500 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      0 === root_child0_child0.getComputedWidth(),
      "0 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedHeight(),
      "0 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
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
      0 === root_child0_child0_child0.getComputedWidth(),
      "0 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedHeight(),
      "0 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

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
      500 === root_child0.getComputedWidth(),
      "500 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0.getComputedHeight(),
      "0 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")",
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
      0 === root_child0_child0.getComputedWidth(),
      "0 === root_child0_child0.getComputedWidth() (" + root_child0_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0_child0.getComputedHeight(),
      "0 === root_child0_child0.getComputedHeight() (" + root_child0_child0.getComputedHeight() + ")",
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
      0 === root_child0_child0_child0.getComputedWidth(),
      "0 === root_child0_child0_child0.getComputedWidth() (" + root_child0_child0_child0.getComputedWidth() + ")",
    );
    assert(
      0 === root_child0_child0_child0.getComputedHeight(),
      "0 === root_child0_child0_child0.getComputedHeight() (" + root_child0_child0_child0.getComputedHeight() + ")",
    );
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
