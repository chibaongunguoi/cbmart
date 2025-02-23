<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    function add(Request $request)
    {
        $status = session('status');
        $categories = Category::all();
        return inertia::render('Admin/Category/Add', compact('categories', 'status'));
    }
    function store(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255', 'unique:' . Category::class],
            'parent_id' => [],
            // 'description' => ['string'],
        ], [
            'required' => ':attribute không được để trống',
            'max' => ':attribute có độ dài tối đa :max ký tự',
        ], [
            'name' => 'Tên danh mục',
            'parent_id' => 'danh mục cha'
        ]);
        Category::create([
            'name' => $request->name,
            'parent_id' => $request->parent_id
        ]);
        return redirect('admin/category/add')->with('status', 'Thêm danh mục thành công');
    }
    function edit(Request $request)
    {
        $id = $request->input('id');

        return inertia::render('Admin/Category/Edit');
    }
    function update(Request $request)
    {
        $id = $request->input('id');
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            // 'description' => ['string'],
        ], [
            'required' => ':attribute không được để trống',
            'max' => ':attribute có độ dài tối đa :max ký tự',
        ], [
            'name' => 'Tên danh mục',
            'slug' => 'Slug',
            'description' => 'Mô tả'
        ]);

        return redirect("admin/category/add")->with('status', 'Cập nhập danh mục thành công');
    }
    function delete(Request $request)
    {
        $id = $request->input('id');
        Category::find($id)->delete();
        return redirect("admin/category/add")->with('status', 'Xóa danh mục thành công');
    }
}
