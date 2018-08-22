@extends('layouts.app')

@section('content')
    <div class="flex items-center">
        <div class="md:w-1/2 md:mx-auto">
            <div id="gif-gif" data-votes="{{ $votes }}"></div>
        </div>
    </div>
@endsection
