<div class="recordModal" id="recordModal">
    <div class="content">
        <div class="header"><p>紀錄</p><i class="fas fa-times" id="closeRecordModalBtn"></i> </div>
        <div class="list" id="recordModalList">
            <div class="betitem title">
                <p>期號</p>
                <p>下注金額</p>
                <p>注量</p>
                <p>結果</p>
                <p>時間</p>
           </div>
           @foreach ($betlist as $betitem)
           @php
              $total = intval($betitem->result) - intval($betitem->money);
           @endphp
           <div class="betitem">
                <p>{{$betitem->bet_number}}</p>
                <p>{{$betitem->money}}</p>
                <p>{{$betitem->chips}}</p>
                <p style=" color:@if($total>0) green @else red @endif "> {{$total}} </p>
                <p>{{$betitem->created_at}}</p>
            </div>
           @endforeach
        </div>
    </div>
</div>