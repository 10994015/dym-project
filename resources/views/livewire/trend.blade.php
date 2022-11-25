<div class="trendModal" id="trendModal">
    <div class="content">
        <div class="header"><p>走勢</p><i class="fas fa-times"></i> </div>
        <div class="list">
            @for($n=1;$n<=50;$n++)
                <div class="item">
                    <div class="number">SQWEER115616512200</div>
                    <div class="imgList">
                        @for($i=1;$i<=10;$i++)
                            <img src="/images/airplane/air{{$i}}.png">
                        @endfor
                    </div>
                </div>
            @endfor
        </div>
    </div>
</div>