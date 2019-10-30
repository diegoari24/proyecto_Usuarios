<?php

namespace App\Http\Controllers;

use App\Usuarios;
use Illuminate\Http\Request;

class UsuariosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $usuario =Usuarios::get();
        echo ($usuario);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
        $usuario = new Usuarios();
       $usuario->nombre= $request->input('nombre');
       $usuario->apellidos= $request->input('apellidos');
       $usuario->cedula= $request->input('cedula');
       $usuario->correo= $request->input('correo');
       $usuario->telefono= $request->input('telefono');
       $usuario->save();
       echo json_encode($usuario);

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function show(Usuarios $usuarios)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function edit(Usuarios $usuarios)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Usuarios  $usuarios_id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $usuarios_id)
    {
        $usuario = Usuarios::find($usuarios_id);
        $usuario->nombre= $request->input('nombre');
        $usuario->apellidos= $request->input('apellidos');
        $usuario->cedula= $request->input('cedula');
        $usuario->correo= $request->input('correo');
        $usuario->telefono= $request->input('telefono');
        $usuario->save();
        echo json_encode($usuario);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Usuarios  $usuarios
     * @return \Illuminate\Http\Response
     */
    public function destroy($usuarios_id)
    {
       $usuario = Usuarios::find($usuarios_id);
       $usuario->delete();
    }
}
