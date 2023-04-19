import{_ as e,W as t,X as p,$ as c,Z as i,a1 as o,a0 as n,Y as s,D as l}from"./framework-d3c6dbde.js";const u={},d=s(`<h2 id="overloading" tabindex="-1"><a class="header-anchor" href="#overloading" aria-hidden="true">#</a> Overloading</h2><p><strong>Overloading(多載)</strong> 的意義即 <strong>『相同的目標結果，不同的行為(執行動作)』</strong> ，也就是在要達到相同的目標時，實際上會針對不同情況採用不同的動作；</p><p>舉例來說</p><div class="language-pseudocode line-numbers-mode" data-ext="pseudocode"><pre class="language-pseudocode"><code>程式中數字的相加
1 + 1 =&gt; 2
此時 目的是要相加兩個數字，而行為則是將數字做加總

程式中字串的相加
&quot;Hello&quot; + &quot; World!&quot; =&gt; &quot;Hello World!&quot;
此時 目的是要相加兩個字串，而行為則是將字串串接起來
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>從上方例子可看出 加號在其中都是想要表達『相加』，但對於字串和數字來說，相加的實際行為是不同的。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>靜態多型性指的是程式能針對不同的行為利用記號來做相關聯</p><p>使得編譯時期程式就能知道實際上要執行的目標對象，即 <strong>早期連結（early binding）</strong> ，也稱作 <strong>靜態繫結（static binding）</strong></p><p>Overloading就是靜態多型的一種實施方式</p></div><div class="hint-container danger"><p class="hint-container-title">警告</p><p>Java不支持實現運算子多載(Operator Overloading) 因此此處不加以描述</p></div><h3 id="方法多載" tabindex="-1"><a class="header-anchor" href="#方法多載" aria-hidden="true">#</a> 方法多載</h3><p>方法的多載即針對方法執行 相同的名稱(目標結果)，不同的行為(執行動作) 的概念；那在區隔相同目標結果與執行行為時，方法利用了 <strong>方法名稱</strong> 與 <strong>方法署名</strong> 來達到這個效果</p><h4 id="方法名稱與方法署名" tabindex="-1"><a class="header-anchor" href="#方法名稱與方法署名" aria-hidden="true">#</a> 方法名稱與方法署名</h4><p>方法名稱指的即我們定義的方法名稱，如</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token comment">// test即方法名稱</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法署名(Method Signature) 指的是 <strong>方法名稱 + 方法參數</strong> ，如</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token comment">// 名稱為 test</span>
    <span class="token comment">// 參數為 無</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 沒有任何參數也是一種形式</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 名稱為 test</span>
    <span class="token comment">// 參數為 int</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在判斷署名時不考慮參數的變數名稱 只考慮參數型態</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 名稱為 test</span>
    <span class="token comment">// 參數為 int, String</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">,</span> <span class="token class-name">String</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 回傳型態不影響方法的署名</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 名稱為 test</span>
    <span class="token comment">// 參數為 String, int</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">String</span> b<span class="token punctuation">,</span> <span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 在判斷署名時參數型態的順序也會被考慮</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">/*
    public void test(String test1, int test2) {
    	// 不能有相同署名的方法存在
    }
    */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多載的判斷依據" tabindex="-1"><a class="header-anchor" href="#多載的判斷依據" aria-hidden="true">#</a> 多載的判斷依據</h4><p>在Java中我們利用相同的 <strong>方法名稱</strong> 作為目標的描述，而不同的 <strong>方法署名</strong> 則做為判斷相同目標不同動作的依據。</p><p>這樣的設計表示了當我們提供給方法的資訊(參數)相同時，理論上應該會使用相同的動作來達到一樣的目標；而當提供的資訊不同時，便會依照不同的資訊(參數)來進行不同的動作來達到相同的目標。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>雖然方法署名不包含回傳型別，但若回傳型別不同可能會造成程式難以維護、理解</p></div><h3 id="建構子多載" tabindex="-1"><a class="header-anchor" href="#建構子多載" aria-hidden="true">#</a> 建構子多載</h3>`,19),r=s(`<p>而利用建構子的多載我們便可以通過外界提供的不同參數來決定我們創建實體的方式，而目標皆為創建出該類別的實例。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> width<span class="token punctuation">;</span><span class="token comment">// 寬</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> height<span class="token punctuation">;</span><span class="token comment">// 高</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果沒有給我任何資訊 預設寬高都會是 1</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果只給我一個資訊w 則寬高都會是w</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> w<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> w<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">,</span> <span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果提供了寬與高，那便分開設定到寬高屬性中</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> w<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> h<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>從上例可看出建構子多載與方法多載的概念十分相像，但建構子多載時常會有類似的動作(因為主要目的都是初始化屬性居多)；也因此我們會將相同的概念利用建構子的互相呼叫來做整併。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> width<span class="token punctuation">;</span><span class="token comment">// 寬</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> height<span class="token punctuation">;</span><span class="token comment">// 高</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">,</span> <span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果提供了寬與高，那便分開設定到寬高屬性中</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> w<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> h<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 當外界沒有任何資訊，自己提供兩個數字1作為w, h提供給另一個建構子</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//利用this來呼叫建構子</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 如果只給我一個資訊w 則將w作為w, h提供給另一個建構子</span>
        <span class="token keyword">this</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="overriding" tabindex="-1"><a class="header-anchor" href="#overriding" aria-hidden="true">#</a> Overriding</h2><p><strong>Overriding(覆寫)</strong> 的意義與多載相同，也是 <strong>『相同的目標結果，不同的行為(執行動作)』</strong> ，但覆寫在實現上並非通過靜態繫結的方式來達成，而是通過 <strong>動態繫結</strong> 來達成。</p><p>在Java中，我們可以利用 <a href="/java/2e9a44">繼承</a> 來修改與擴充一個類別，而覆寫正式延伸了這個特點來達到相同的目標結果，不同的行為；因為子類別必定包含了父類別的內容，因此我們只需要將子類別中包含的 『父類別的行為』修改，就可以達到子類別的行為不同的目的。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">// 在父類別形狀的取得面積中，只會得到0這個結果</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Rectangle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> width<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> height<span class="token punctuation">;</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token keyword">int</span> w<span class="token punctuation">,</span> <span class="token keyword">int</span> h<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">=</span> w<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>height <span class="token operator">=</span> h<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// 標註Override代表我們覆寫了父類別中的相同方法(同 方法署名)</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>width <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>height<span class="token punctuation">;</span><span class="token comment">// 對長方形來說 面積就不會是0 而是 寬乘高</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Circle</span> <span class="token keyword">extends</span> <span class="token class-name">Shape</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> radius<span class="token punctuation">;</span><span class="token comment">// 半徑</span>
    
    <span class="token keyword">public</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token keyword">int</span> r<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">=</span> r<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">float</span> <span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">*</span> <span class="token keyword">this</span><span class="token punctuation">.</span>radius <span class="token operator">*</span> <span class="token number">3.14f</span><span class="token punctuation">;</span><span class="token comment">// 隊圓形來說 面積是 半徑乘半徑乘圓周率</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>從上面範例可以看出getArea在不同的形狀下他有不同的行為，這些行為的目的都是要取得面積的大小；那具體跟多型的關聯呢?</p><h4 id="多型與overriding" tabindex="-1"><a class="header-anchor" href="#多型與overriding" aria-hidden="true">#</a> 多型與Overriding</h4><p>前述所提到的Overloading是利用靜態繫結的方式，判斷方法署名的不同來達到多型的效果。</p><p>而在Overriding時，我們實際上使用到的方法署名是相同的，不同的部分是調用的類別不同；但這些類別之中有一個共同性，也就是父類別。</p><p>因此Java利用了 <strong>不同的子類別用不同的行為修改父類別中相同署名的方法</strong> 來達成多型</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 一般情況我們宣告時與實際創建時的型態會一致</span>
        <span class="token class-name">Circle</span> circle <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 多型時我們會使用父類別的型態宣告，創建出子類別的實體</span>
        <span class="token class-name">Shape</span> shape <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Circle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 因為實際上子類別一定可以滿足父類別中的功能與內容</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>shape<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 此時會執行的是Circle中的getArea()</span>
        
        shape <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Rectangle</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 不管是哪一個子類別都必定包含父類別中所需要的內容</span>
        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>shape<span class="token punctuation">.</span><span class="token function">getArea</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// 此時會執行的是Rectangle中的getArea()</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在上述例子中，shape變數只能使用getArea方法 並不能使用Circle或Rectangle中的方法，因為系統沒辦法確保shape一定是特定某一個子類別</p></div><div class="hint-container note"><p class="hint-container-title">注</p><p>動態多型性指的是程式在執行時期通過 <strong>動態繫結(dynamic binding)</strong> 依照實際類別執行不同的行為</p><p>Overriding就是動態多型的一種實施方式</p></div>`,16);function k(v,m){const a=l("RouterLink");return t(),p("div",null,[d,c("p",null,[i(a,{to:"/java/099de6/#%E5%BB%BA%E6%A7%8B%E5%AD%90"},{default:o(()=>[n("建構子(Constructor)")]),_:1}),n(" 為類別中創建時的初始化方法。")]),r])}const h=e(u,[["render",k],["__file","index.html.vue"]]);export{h as default};
